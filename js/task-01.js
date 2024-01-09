const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
const totalCategories = categoriesItems.length;
console.log(`Number of categories:${totalCategories}`);
categoriesItems.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("li").length;
    console.log(`Category : ${title}`);
    console.log(`Elements: ${itemsCount}`)
});