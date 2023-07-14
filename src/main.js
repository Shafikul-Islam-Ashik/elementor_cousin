/**
 * get heading elements
 */
const titleInput = document.querySelector(".heading-section .heading");
const titleAlign = document.querySelectorAll(".heading-section .align");
const titleTransform = document.querySelectorAll(".text-transform");
const titleWeight = document.querySelectorAll(".heading-section .font-weight");
const titleSize = document.querySelector(".heading-section .font-size");
const titleSizeDisplay = document.querySelector(
  ".heading-section .font-size-display"
);
const titleColor = document.querySelector(".heading-section .color");
const titleBackgroundColor = document.querySelector(
  ".heading-section .background-color"
);
const titleFamily = document.querySelector(".heading-section .font-family");
const titleMargin = document.querySelectorAll(".heading-section .margin input");
const titlePadding = document.querySelectorAll(
  ".heading-section .padding input"
);

/**
 * get output elements
 */
const headingOutput = document.querySelector(".output .heading-wrapper h2");

/**
 * functionality for heading section
 */
//set init val to text input field
titleInput.value = headingOutput.textContent;

// apply heading title input
applyInput(titleInput, headingOutput);

// apply text align
applyTextAlign(titleAlign, headingOutput);

// apply text transform
applyTextTransform(titleTransform, headingOutput);

// apply font weight
applyFontWeight(titleWeight, headingOutput);

// apply font size
applyFontSize(titleSize, headingOutput);

// display font size
titleSize.addEventListener("input", () => {
  titleSizeDisplay.value = `${titleSize.value} px`;
});

// apply font color
applyColor(titleColor, headingOutput);

// apply background color
applyBackgroundColor(titleBackgroundColor, headingOutput);

// apply font family
applyFontFamily(titleFamily, headingOutput);

// apply margin
applyMargin(titleMargin, headingOutput);

// apply padding
applyPadding(titlePadding, headingOutput);

// functionality for heading section ends

/**
 * get description elements
 */
const descInput = document.querySelector(".desc-section textarea");
const descAlign = document.querySelectorAll(".desc-section .align");
const descTransform = document.querySelectorAll(
  ".desc-section .text-transform"
);
const descWeight = document.querySelectorAll(".desc-section .font-weight");
const descSize = document.querySelector(".desc-section .font-size");
const descSizeDisplay = document.querySelector(
  ".desc-section .font-size-display"
);
const descLineHeight = document.querySelector(".desc-section .line-height");
const descLineHeightDisplay = document.querySelector(
  ".desc-section .line-height-display"
);
const descColor = document.querySelector(".desc-section .color");
const descBackgroundColor = document.querySelector(
  ".desc-section .background-color"
);
const descFamily = document.querySelector(".desc-section .font-family");

const descMargin = document.querySelectorAll(".desc-section .margin input");
const descPadding = document.querySelectorAll(".desc-section .padding input");

/**
 * get output elements
 */
const descriptionOutput = document.querySelector(
  ".output .description-wrapper p"
);

/**
 * functionality for description section
 */

//set init val to text input field
descInput.value = descriptionOutput.textContent;

// apply description input
applyInput(descInput, descriptionOutput);

// apply text align
applyTextAlign(descAlign, descriptionOutput);

// apply text transform
applyTextTransform(descTransform, descriptionOutput);

// apply font weight
applyFontWeight(descWeight, descriptionOutput);

// apply font size
applyFontSize(descSize, descriptionOutput);

// display font size into input field
descSize.addEventListener("input", () => {
  descSizeDisplay.value = `${descSize.value} px`;
});

// display line height into input field
descLineHeight.addEventListener("input", () => {
  descLineHeightDisplay.value = `${descLineHeight.value} px`;
});

// apply line height
applyLineHeight(descLineHeight, descriptionOutput);

// apply font color
applyColor(descColor, descriptionOutput);

// apply background color
applyBackgroundColor(descBackgroundColor, descriptionOutput);

// apply font family
applyFontFamily(descFamily, descriptionOutput);

// apply margin
applyMargin(descMargin, descriptionOutput);

// apply padding
applyPadding(descPadding, descriptionOutput);

// functionality for description section ends

/**
 * get button elements
 */
const buttonInput = document.querySelector(".button-section .button-input");
const buttonAlign = document.querySelectorAll(".button-section .align");
const buttonTransform = document.querySelectorAll(".button-transform");
const buttonWeight = document.querySelectorAll(".button-section .font-weight");
const buttonPosition = document.querySelectorAll(
  ".button-section .button-position"
);
const buttonSize = document.querySelector(".button-section .font-size");
const buttonSizeDisplay = document.querySelector(
  ".button-section .font-size-display"
);
const buttonColor = document.querySelector(".button-section .color");
const buttonBackgroundColor = document.querySelector(
  ".button-section .background-color"
);
const buttonFamily = document.querySelector(".button-section .font-family");
const buttonMargin = document.querySelectorAll(".button-section .margin input");
const buttonPadding = document.querySelectorAll(
  ".button-section .padding input"
);
/**
 * get output elements
 */
const buttonOutput = document.querySelector(".output .button-wrapper button");

/**
 * functionality for button section
 */

// apply button Input
applyInput(buttonInput, buttonOutput);

// apply button text Align
applyTextAlign(buttonAlign, buttonOutput);

// apply button text transform
applyTextTransform(buttonTransform, buttonOutput);

// apply button font weight
applyFontWeight(buttonWeight, buttonOutput);

// apply button font size
applyFontSize(buttonSize, buttonOutput);

// display button font size
buttonSize.addEventListener("input", () => {
  buttonSizeDisplay.value = `${buttonSize.value} px`;
});

// apply button font color
applyColor(buttonColor, buttonOutput);

// apply button background color
applyBackgroundColor(buttonBackgroundColor, buttonOutput);

// apply button font family
applyFontFamily(buttonFamily, buttonOutput);

// apply button margin
applyMargin(buttonMargin, buttonOutput);

// apply button padding
applyPadding(buttonPadding, buttonOutput);

// functionality for button section ends

// apply button position
buttonPosition.forEach((item, index) => {
  item.onchange = () => {
    buttonOutput.parentElement.style.justifyContent = item.value;
  };
});
