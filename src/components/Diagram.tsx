import "source-map-support/register";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Base64 } from "js-base64";
import {
  defaults,
  find,
  intersection,
  keys,
  forOwn,
  omitBy,
  toPairs,
  uniq,
  values
} from "lodash";
import { Entity } from "./Entity";
import { Observable } from "rxjs/Observable";
import { AjaxRequest } from "rxjs/observable/dom/AjaxObservable";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import * as validDataUrl from "valid-data-url";
import {
  MARKER_PROPERTY_NAMES,
  NON_FUNC_IRI_MARKER_PROPERTY_VALUES
} from "./Marker";
import { getHighlighted } from "../utils/getHighlighted";
import { getMarkerId, Marker } from "./Marker";
import { getHidden } from "../utils/getHidden";
import {
  formatAsElementId,
  Icons
} from "../drawers/icons/__bundled_dont_edit__";
import * as markerDrawers from "../drawers/markers/__bundled_dont_edit__";
import * as edgeDrawers from "../drawers/edges/__bundled_dont_edit__";

export class Diagram extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.state.iconSuffix = new Date().toISOString().replace(/\W/g, "");
  }

  handleClick(e) {
    const { handleClick, entityMap } = this.props;
    const id = e.target.parentNode.parentNode.getAttribute("id");
    const entity = entityMap[id];
    handleClick(
      omitBy(defaults({ entity: entity }, e), (v, k) => k.indexOf("_") === 0)
    );
  }

  getGroupedZIndexedEntities(zIndexedEntities) {
    const { entityMap } = this.props;
    return zIndexedEntities
      .filter(entity => !entity.isPartOf)
      .reduce(function(acc, entity) {
        const kaavioType = entity.kaavioType;
        if (kaavioType === "Group") {
          // TODO: refactor this so that contains is actually a map of the contained elements. Not just an array of their IDs
          entity.contains = entity.contains
            .map(id => entityMap[id])
            .sort(function(a, b) {
              const zIndexA = a.zIndex;
              const zIndexB = b.zIndex;
              if (zIndexA < zIndexB) {
                return 1;
              } else if (zIndexA > zIndexB) {
                return -1;
              } else {
                return 0;
              }
            })
            .map(entity => entity.id);
        } else if (entity.hasOwnProperty("burrs")) {
          entity.burrs = entity.burrs
            .map(id => entityMap[id])
            .sort(function(a, b) {
              const zIndexA = a.zIndex;
              const zIndexB = b.zIndex;
              if (zIndexA < zIndexB) {
                return 1;
              } else if (zIndexA > zIndexB) {
                return -1;
              } else {
                return 0;
              }
            })
            .map(entity => entity.id);
        }
        if (
          ["Burr"].indexOf(kaavioType) === -1 &&
          !entity.hasOwnProperty("isPartOf")
        ) {
          acc.push(entity);
        }
        return acc;
      }, []);
  }

  componentWillReceiveProps(nextProps) {
    let that = this;
    const prevProps = that.props;
    forOwn(nextProps, function(prop, key) {
      if (key === "filters") {
        that.setState({
          [key]: prop
        });
      } else if (
        prop &&
        JSON.stringify(prevProps[key]) !== JSON.stringify(prop)
      ) {
        that.setState({
          [key]: prop
        });
      }
    });
  }

  getMarkerInputs(zIndexedEntities) {
    const backgroundColor = this.props.backgroundColor;
    const edges = zIndexedEntities.filter(
      entity => entity.kaavioType === "Edge"
    );

    // TODO Currently just using the background color of the diagram as a whole.
    // Do we want to handle the case where the marker is on top of another entity?

    const markerColors = Array.from(
      edges
        .filter(edge => edge.hasOwnProperty("color"))
        .reduce(function(acc, edge) {
          acc.add(edge.color);
          return acc;
        }, new Set())
    );

    // TODO Currently just keeping the background colors the same as the colours. I.e. arrowhead is same as line
    // Do we want to handle the case where the marker is on top of another entity?
    const markerBackgroundColors = markerColors.slice();

    const markerNames = Array.from(
      edges.reduce(function(acc, edge: any) {
        intersection(MARKER_PROPERTY_NAMES, keys(edge)).forEach(function(
          markerLocationType
        ) {
          const markerName: string & NonFuncIriMarkerPropertyValue =
            edge[markerLocationType];
          // we don't want to create a marker def for markers with names like "none"
          if (NON_FUNC_IRI_MARKER_PROPERTY_VALUES.indexOf(markerName) === -1) {
            acc.add(edge[markerLocationType]);
          }
        });
        return acc;
      }, new Set())
    );

    return markerColors
      .map(color => ({ color: color }))
      .reduce(function(acc: any[], partialInput) {
        const pairs = toPairs(partialInput);
        return acc.concat(
          markerBackgroundColors.map(function(markerBackgroundColor) {
            return pairs.reduce(function(subAcc: any, pair) {
              const key = pair[0];
              subAcc[key] = pair[1];
              subAcc.markerBackgroundColor = markerBackgroundColor;
              return subAcc;
            }, {});
          })
        );
      }, [])
      .reduce(function(acc: any[], partialInput) {
        const pairs = toPairs(partialInput);
        return acc.concat(
          MARKER_PROPERTY_NAMES.map(function(markerLocationType) {
            return pairs.reduce(function(subAcc: any, pair) {
              const key = pair[0];
              subAcc[key] = pair[1];
              subAcc.markerLocationType = markerLocationType;
              return subAcc;
            }, {});
          })
        );
      }, [])
      .reduce(function(acc: any[], partialInput) {
        const pairs = toPairs(partialInput);
        return acc.concat(
          markerNames.map(function(markerName) {
            return pairs.reduce(function(subAcc: any, pair) {
              const key = pair[0];
              subAcc[key] = pair[1];
              subAcc.markerName = markerName;
              return subAcc;
            }, {});
          })
        );
      }, []) as any[];
  }

  render() {
    const {
      id,
      backgroundColor,
      customStyle,
      entityMap,
      filters,
      height,
      name,
      organism,
      width,
      zIndices,
      highlightedNodes,
      hiddenEntities
    } = this.props;

    const zIndexedEntities = zIndices.map(id => entityMap[id]);

    const groupedZIndexedEntities = this.getGroupedZIndexedEntities(
      zIndexedEntities
    );

    const markerInputs = this.getMarkerInputs(zIndexedEntities);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id={id}
        version="1.1"
        baseProfile="full"
        preserveAspectRatio="xMidYMid"
        onClick={this.handleClick.bind(this)}
        className={`kaavio-diagram ${customStyle.diagramClass}`}
        viewBox={`0 0 ${width} ${height}`}
      >

        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
				<![CDATA[
					${"" /*customStyle*/}
				]]>
			`
          }}
        />

        <g
          className={`viewport ${customStyle.viewportClass} svg-pan-zoom_viewport`}
        >

          <defs>
            {
              <clipPath
                id="rounded-rectangle-clip-path"
                clipPathUnits="objectBoundingBox"
              >
                <rect x="0" y="0" rx="0.125" ry="0.25" width="1" height="1" />
              </clipPath>
            }
            {filters}
            <Icons />

            {markerInputs.map(input => {
              const {
                markerLocationType,
                markerName,
                color,
                markerBackgroundColor
              } = input;
              const normalizedName = markerDrawers.formatAsElementId(
                markerName
              );
              return (
                <Marker
                  key={getMarkerId(
                    markerLocationType,
                    markerName,
                    color,
                    markerBackgroundColor
                  )}
                  color={color}
                  backgroundColor={markerBackgroundColor}
                  normalizedName={normalizedName}
                  markerLocationType={markerLocationType}
                  markerDrawer={markerDrawers[normalizedName]}
                />
              );
            })}
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            className="kaavio-viewport-background"
            fill={backgroundColor}
          />
          <g width={width} height={height}>
            {groupedZIndexedEntities
              .filter(
                entity =>
                  ["Node", "Edge", "Group"].indexOf(entity.kaavioType) > -1
              )
              .filter(entity => !entity.hasOwnProperty("isPartOf"))
              .map(function(entity) {
                const highlighted = getHighlighted(entity, highlightedNodes);
                const hidden = getHidden(entity, hiddenEntities);
                const icon = formatAsElementId(entity.drawAs);
                return (
                  <Entity
                    key={entity.id}
                    {...entity}
                    icon={icon ? icon : null}
                    edgeDrawers={edgeDrawers}
                    customStyle={customStyle}
                    isHighlighted={highlighted.highlighted}
                    highlightedColor={highlighted.color}
                    highlightedNodes={highlightedNodes}
                    entityMap={entityMap}
                    hidden={hidden}
                    hiddenEntities={hiddenEntities}
                  />
                );
              })}
          </g>
        </g>
      </svg>
    );
  }
}