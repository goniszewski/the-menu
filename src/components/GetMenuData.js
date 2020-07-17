import categories from "../dummy-data/categories.json";
import items from "../dummy-data/items.json";
import ingredients from "../dummy-data/ingredients.json";

export function getCategories() {
  const menuCategories = categories;
  return menuCategories;
}

export function getItems() {
  const menuItems = items;
  return menuItems;
}

export function getIngredients() {
  const menuIngredients = ingredients;
  return menuIngredients;
}
