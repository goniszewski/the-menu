import React from "react";
import { useLocalStore } from "mobx-react-lite";
import {
  getCategories,
  getItems,
  getIngredients,
} from "../components/GetMenuData";

export default function MenuStore() {
  const data = {
    items: [...getItems()],
    ingredients: [...getIngredients()],
    categories: [...getCategories()],
  };
  let newData = {
    items: [
      {
        id: 9,
        category: [2],
        name: "Burger wieprzowy xl",
        price: 25,
        description: null,
        ingredients: [15, 16, 10, 11, 17, 12, 18],
        allergens: null,
        spiceLevel: 0,
        isUndercooked: false,
        vegetarian: false,
        vegan: false,
        comesWith: [],
      },
    ],
    ingredients: [],
    categories: [],
  };

  const thisStore = {
    // get data (read-only)
    getItems: data.items.concat(newData.items),
    getCategories: data.categories.concat(newData.categories),
    getIngredients: data.ingredients.concat(newData.ingredients),
    // add data
    addCategory(category) {
      newData.categories.push(category);
    },
    async addItem(item) {
      await newData.items.push(item);
    },
    addIngredient(ingredient) {
      newData.ingredients.push(ingredient);
    },
  };

  return thisStore;
}

export const useMenuStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export const MenuStoreProvider = ({ children }) => {
  const store = useLocalStore(MenuStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
export const storeContext = React.createContext();
