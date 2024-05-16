const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});