export let newCategories = [];
export let newItems = [];
export let newIngredients = [];

export function setCategories(categories) {
  this.setState({ categories: [...this.state.categories, categories] }); // not in class body
}

export function setItems(items) {
  const menuItems = items;
  return menuItems;
}

export function setIngredients(ingredients) {
  const menuIngredients = ingredients;
  return menuIngredients;
}
