const categoriesList = document.querySelector('#categories');
const elementsQantity = categoriesList.children.length;
console.log(`Number of categories: ${elementsQantity}`);

const elements = categoriesList.children;
for (const element of elements) {
	console.log(`Category: ${element.firstElementChild.textContent}`)
	console.log(`Elements: ${element.firstElementChild.nextElementSibling.children.length}`);
};