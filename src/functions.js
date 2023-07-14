/**
 * function for input field
 */
const applyInput = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.innerHTML = inputElement.value;
  });
};

/**
 * function for TextAlign
 */
const applyTextAlign = (inputElement, outputElement) => {
  inputElement.forEach((item) => {
    item.onchange = () => {
      outputElement.style.textAlign = item.value;
    };
  });
};

/**
 * function for Text Transform
 */
const applyTextTransform = (inputElement, outputElement) => {
  inputElement.forEach((item) => {
    item.onchange = () => {
      outputElement.style.textTransform = item.value;
    };
  });
};

/**
 * function for Font Size
 */
const applyFontSize = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.style.fontSize = inputElement.value + "px";
  });
};

/**
 * function for line Height
 */
const applyLineHeight = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.style.fontSize = inputElement.value + "px";
  });
};

/**
 * function for Font Weight
 */
const applyFontWeight = (inputElement, outputElement) => {
  inputElement.forEach((item) => {
    item.onchange = () => {
      outputElement.style.fontWeight = item.value;
    };
  });
};

/**
 * function for Font Family
 */
const applyFontFamily = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.style.fontFamily = inputElement.value;
  });
};

/**
 * function for Color
 */
const applyColor = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.style.color = inputElement.value;
  });
};

/**
 *  function for Background Color
 */
const applyBackgroundColor = (inputElement, outputElement) => {
  inputElement.addEventListener("input", () => {
    outputElement.style.backgroundColor = inputElement.value;
  });
};

/**
 *  function for padding
 */
const applyPadding = (inputElement, outputElement) => {
  inputElement.forEach((item, index) => {
    item.oninput = () => {
      if (index === 0) {
        outputElement.style.paddingTop = item.value + "px";
      } else if (index === 1) {
        outputElement.style.paddingBottom = item.value + "px";
      } else if (index === 2) {
        outputElement.style.paddingLeft = item.value + "px";
      } else if (index === 3) {
        outputElement.style.paddingRight = item.value + "px";
      }
    };
  });
};

/**
 * function for margin
 */
const applyMargin = (inputElement, outputElement) => {
  inputElement.forEach((item, index) => {
    item.oninput = () => {
      if (index === 0) {
        outputElement.style.marginTop = item.value + "px";
      } else if (index === 1) {
        outputElement.style.marginBottom = item.value + "px";
      } else if (index === 2) {
        outputElement.style.marginLeft = item.value + "px";
      } else if (index === 3) {
        outputElement.style.marginRight = item.value + "px";
      }
    };
  });
};
