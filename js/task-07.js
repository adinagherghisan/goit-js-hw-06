const fontSizeControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");
fontSizeControl.addEventListener("input", () => {
    const styleText = fontSizeControl.value;
    spanText.style.fontSize = `${styleText}px`;
})