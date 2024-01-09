
const widget = document.querySelector(".widget")
const spanColor = widget.querySelector(".color")
const changeColorButton = widget.querySelector(".change-color")
changeColorButton.addEventListener("click", () => {
  const changeColor = getRandomHexColor()
  document.body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}