const counterValueElement = document.getElementById("value")
const counter= document.getElementById("counter")
let counterValue = 0
counter.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (action === "increment") {counterValue++}
    else if (action === "decrement") { counterValue-- }
    counterValueElement.textContent = counterValue
}
)