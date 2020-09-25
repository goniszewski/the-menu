import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { data } from "autoprefixer";

export default function MenuStore() {
  const data = { items: ["test1", "test2"], ingredients: [], categories: [] };
  let newData = { items: ["test3"], ingredients: [], categories: [] };

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
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
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
