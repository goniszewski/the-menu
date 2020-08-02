import { Component, createContext } from "react";
import { observable, computed, autorun } from "mobx";
import categories from "../../dummy-data/categories.json";
import items from "../../dummy-data/items.json";
import ingredients from "../../dummy-data/ingredients.json";

class MenuStore extends Component {
  componentDidMount() {
    this.loadData();
  }

  @observable menuItems = [];
  @observable menuCategories = [];
  @observable menuIngredients = [];
  @observable dataLoading = false;

  loadData() {
    this.dataLoading = true;
    try {
      this.menuCategories = [...this.menuCategories, categories];
      this.menuItems = [...this.menuItems, items];
      this.menuIngredients = [...this.menuIngredients, ingredients];
    } catch (err) {
      console.log(err);
    }
    this.dataLoading = false;
  }
}

const stores = new MenuStore();

export default stores;

// Just for debbuging
autorun(() => {
  console.log("menuCategories: ", stores.menuCategories);
  console.log("menuItems: ", stores.menuItems);
  console.log("menuIngredients: ", stores.menuIngredients);
});
