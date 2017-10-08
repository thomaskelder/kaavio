// NOTE other possibly relevant libraries:
// https://www.npmjs.com/package/jsyg-texteditor
//
// https://www.npmjs.com/package/svg-text-wrap:
//   Give a string, a desired width, and some svg style attributes, get back an array
//
// https://www.npmjs.com/package/svg-text-size:
//   Get a {width, height} given a text string (or array) and svg attributes
//   browser-only
//
// https://github.com/reactjs/react-art/blob/master/src/ReactART.js#L539
// https://github.com/ariutta/cross-platform-text/blob/master/lib/svg.js
// https://github.com/d3plus/d3plus-text: depends on d3.js
// https://www.npmjs.com/package/svg-text: browser-only
// https://www.npmjs.com/package/typesettable: browser-only
// https://www.npmjs.com/package/react-text-on-svg
// http://svgjs.com/elements/#svg-text: no vertical or horizontal alignment
//
// https://www.npmjs.com/package/node-calculate-size:
//   Node API and CLI for calculating text sizes using phantomJS.
//
// https://www.npmjs.com/package/word-wrap
// https://www.npmjs.com/package/word-wrappr

// For more details, see
// http://www.w3.org/TR/SVG11/text.html#TextAnchorProperty
// start | middle | end | inherit
// and
// http://www.w3.org/TR/CSS2/text.html#alignment-prop
// left | right | center | justify | inherit

const direction = require("direction");
const he = require("he");
import * as React from "react";
import { TextProps } from "../typings";

const LTR_CENTRIC_TEXT_ALIGNS = ["left", "right"];

const shiftXCalculatorsByTextAlign = {
  left: function(textDirection, containerPadding, containerWidth) {
    return containerPadding;
  },
  start: function(textDirection, containerPadding, containerWidth) {
    if (textDirection === "rtl") {
      return containerWidth - containerPadding;
    } else {
      return containerPadding;
    }
  },
  center: function(textDirection, containerPadding, containerWidth) {
    return containerWidth / 2;
  },
  end: function(textDirection, containerPadding, containerWidth) {
    if (textDirection === "rtl") {
      return containerPadding;
    } else {
      return containerWidth - containerPadding;
    }
  },
  right: function(textDirection, containerPadding, containerWidth) {
    return containerWidth - containerPadding;
  }
};

const shiftYCalculatorsByContainerVerticalAlign = {
  top: (totalTextHeight, lineHeightPx, containerPadding, containerHeight) =>
    containerPadding + totalTextHeight / 2 + lineHeightPx / 2,
  middle: (totalTextHeight, lineHeightPx, containerPadding, containerHeight) =>
    containerHeight / 2,
  bottom: (totalTextHeight, lineHeightPx, containerPadding, containerHeight) =>
    containerHeight - containerPadding - totalTextHeight / 2 - lineHeightPx / 2
};

const textAnchorCalculatorsByTextAlign = {
  start: textDirection => "start",
  end: textDirection => "end",
  left: function(textDirection) {
    return "start";
    /*
    if (textDirection === "rtl") {
      return "end";
    } else {
      return "start";
    }
		//*/
  },
  center: function(textDirection) {
    return "middle";
  },
  right: function(textDirection) {
    return "end";
    /*
    if (textDirection === "rtl") {
      return "start";
    } else {
      return "end";
    }
		//*/
  }
};

export class Text extends React.Component<any, any> {
  constructor(props: TextProps) {
    super(props);
  }

  render() {
    const {
      color,
      containerHeight, // px
      containerId,
      containerPadding, // px
      containerWidth, // px
      containerVerticalAlign,
      fontFamily,
      fontSize, // px
      fontStyle,
      fontWeight,
      lineHeight: lineHeightEm, // em
      rotation,
      textAlign,
      textContent = "",
      whiteSpace
    } = this.props;
    /* TODO does this handle test cases like these:
		// mixed rtl and ltr content?
    const textContent = "exclamation point -- באמת! -- on the right.";
    const textContent = "בצד ימין  -- really! -- סימן קריאה.";
    const textContent = "exclamation point -- באמת!‏ -- on the left.";
    const textContent = "בצד שמאל  -- really‎! -- סימן קריאה.";
	  // multiline rtl?
    const textContent = "אחר \nצהריים טובים";
		// Notice also that PathVisio only produces left, center, right, so the
		// GPML tests don't include start and end!
    const textAlign = "start";
    const textAlign = "end";
		*/
    const ltrCentric = LTR_CENTRIC_TEXT_ALIGNS.indexOf(textAlign) > -1;
    const lineHeightPx = lineHeightEm * fontSize;
    const textDirection = direction(textContent);
    const textAnchor = textAnchorCalculatorsByTextAlign[textAlign](
      textDirection
    );

    let lines;

    if (whiteSpace === "pre") {
      // These are the most common ways to specify linebreaks:
      const lineBreakRegex = /\r\n|\r|\n|&#xA;|<br>|<br\/>/g;
      lines = textContent.split(lineBreakRegex);
      if (direction(textContent) === "rtl") {
        // U+200E <200e> is https://en.wikipedia.org/wiki/Left-to-right_mark
        // U+200F ‏ is https://en.wikipedia.org/wiki/Right-to-left_mark
        // It seems necessary to prefix the line with U+200E in order to make
        // multiple lines of RTL text split correctly in Chrome, but FF seems
        // to display correctly both with and without.
        lines = lines.map(line => "‎" + line);
        // TODO do we need to add U+200F anywhere to correct for adding the
        // U+200E prefix? Maybe something like this?
        //lines = lines.map(line => "‎" + line.split('').map(character => character + '‏').join(''));
      }
      //} else if (whiteSpace === "normal") {
    } else {
      throw new Error(
        "Only pre currently supported for whiteSpace. Pull requests welcome!"
      );
    }

    const lineCount = lines.length;

    const shiftX: number = shiftXCalculatorsByTextAlign[textAlign](
      textDirection,
      containerPadding,
      containerWidth
    );

    const totalTextHeight = (lineCount - 1) * lineHeightPx;
    const shiftY: number = shiftYCalculatorsByContainerVerticalAlign[
      containerVerticalAlign
    ](totalTextHeight, lineHeightPx, containerPadding, containerHeight);

    const transforms = [];
    transforms.push(`translate(${shiftX},${shiftY})`);
    if (rotation) {
      transforms.push(
        `rotate(${rotation},
					${containerWidth / 2 - shiftX},
					${containerHeight / 2 - shiftY})`
      );
    }

    const dx = lines
      .reduce(function(acc, line) {
        const characterCount = line.length;
        for (let i = 0; i < characterCount; i++) {
          acc.push(0);
        }
        acc.push(-1 * (fontSize / lineHeightEm) * characterCount);
        return acc;
      }, [])
      .join(" ");

    const dy = lines
      .reduce(
        function(acc, line) {
          const characterCount = line.length;
          for (let i = 0; i < line.length; i++) {
            acc.push(0);
          }
          acc.push(lineHeightPx);
          return acc;
        },
        [-1 * (lines.length - 1) * lineHeightPx / 2]
      )
      .join(" ");

    return (
      <text
        dominantBaseline="central"
        fill={color}
        fontFamily={fontFamily}
        fontSize={`${fontSize}px`}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
        textAnchor={textAnchor}
        transform={transforms.join(" ")}
      >
        {lines.map(function(line, i) {
          // These two are equivalent:
          //y={(i - (lineCount - 1) / 2) * lineHeightPx}
          //					dy={
          //						i === 0 ? -1 * (lineCount - 1) * lineHeightPx / 2 : lineHeightPx
          //					}
          return (
            <tspan
              key={`text-line-${i}-${line}`}
              direction={ltrCentric ? "ltr" : textDirection}
              x="0"
              y={(i - (lineCount - 1) / 2) * lineHeightPx}
            >
              {line}
            </tspan>
          );
        })}
      </text>
    );
  }
}

//    const totalTextWidth =
//      Math.max.apply(undefined, lines.map(line => line.length)) * fontSize / 2;
//    const tspanXMapper = {
//      rtl: {
//        start: -totalTextWidth,
//        middle: 0,
//        end: totalTextWidth
//      },
//      ltr: {
//        start: 0,
//        middle: 0,
//        end: 0
//      }
//    };
//    const tspanX = tspanXMapper[textDirection][textAnchor];
//
//{line.split("").map(character => `‎${character}`).join("")}
//{he.encode(line)}
//    return (
//      <text
//        dominantBaseline="central"
//        dx={dx}
//        dy={dy}
//        textLength="300"
//        fill={color}
//        fontFamily={fontFamily}
//        fontSize={`${fontSize}px`}
//        fontStyle={fontStyle}
//        fontWeight={fontWeight}
//        textAnchor={textAnchor}
//        transform={transforms.join(" ")}
//      >
//        {lines.map(function(line, i) {
//          return (
//            <tspan
//              key={`text-line-${i}-${line}`}
//              textLength={line.length * fontSize / lineHeightEm}
//            >
//              {line}
//            </tspan>
//          );
//        })}
//        {/*
//        {textContent}
//        dx={dx}
//        {lines.map(function(line, i) {
//          //x={tspanX}
//          //dy={(i - (lineCount - 1) / 2) * lineHeightPx}
//          return (
//            <tspan
//              key={`text-line-${i}-${line}`}
//              x="0"
//              dy={
//                i === 0 ? -1 * (lineCount - 1) * lineHeightPx / 2 : lineHeightPx
//              }
//            >
//              {line}
//            </tspan>
//          );
//        })}
//					*/}
//      </text>
//    );

/*
function getTextPathXValues(containerPadding, textDirection, containerWidth) {
  if (textDirection === "rtl") {
    return [containerWidth - containerPadding, containerPadding];
  } else {
    return [containerPadding, containerWidth - containerPadding];
  }
}
//*/

/* In case I ever want to render text on edges, here's a start
			const [x0, x1] = getTextPathXValues(
				containerPadding,
				textDirection,
				containerWidth
			);
      const length = Math.floor(containerHeight / (lineHeightPx));
      const d = fill("", 0, length, Array(length))
        .map(function(p, i) {
          const y = (lineHeightPx) * (i + 1);
          return `M ${x0} ${y} L ${x1} ${y}`;
        })
        .join("\n");
      const pathId = `mypath-for-${containerId}`;
      return (
        <g>
          <path id={pathId} d={d} />
          <text
            textAnchor={textAnchor}
            dx={xTranslation}
            style={style}
            fill={color}
            dominantBaseline="central"
          >
            <textPath xlinkHref={`#${pathId}`}>
              {textContent.replace(lineBreakRegex, "")}
            </textPath>
          </text>
        </g>
		//*/
