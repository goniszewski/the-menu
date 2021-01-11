import categories from "../dummy-data/categories.json";
import items from "../dummy-data/items.json";
import ingredients from "../dummy-data/ingredients.json";
import { newCategories, newItems, newIngredients } from "./SetMenuData";

export function getCategories() {
  const menuCategories = categories.concat(
    newCategories[0] ? newCategories : []
  );
  return menuCategories;
}

export function getItems() {
  const menuItems = items.concat(newItems[0] ? newItems : []);
  return menuItems;
}

export function getIngredients() {
  const menuIngredients = ingredients.concat(
    newIngredients[0] ? newIngredients : []
  );
  return menuIngredients;
}
