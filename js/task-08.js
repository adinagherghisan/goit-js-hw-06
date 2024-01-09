const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = loginForm.elements;
    const formData = {};
    for (let i = 0; i < formElements.length; i++){
        const element = formElements[i];
        if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "select" || element.tagName.toLowerCase() === "textarea") {
            if (element.value === "") {
                alert("Toate campurile trebuie completate!");
                return;
            }    
            formData[element.name] = element.value;     
        }
    }
    console.log(formData);
    loginForm.reset()
})