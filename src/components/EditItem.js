import React, { Component } from "react";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import {
  getItems,
  getIngredients,
  getCategories,
} from "../components/GetMenuData";

class Edititem extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render() {
    if (this.state.isModalVisible) {
      return (
        <div disabled>
          <button onClick={() => this.setState({ isModalVisible: true })}>
            <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
          </button>
          <form className="z-20 block absolute inset-0 appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 hover:border-gray-500 px-4 py-5 mx-4 my-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <span className="align-middle mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Item name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Name..."
                type="text"
                value={this.props.item.name ? this.props.item.name : null}
              />
            </span>
            <span className="align-middle mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="ingredients"
              >
                Ingredients
              </label>
              <div className="relative mb-4">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="ingredients"
                >
                  {getCategories().map((category) => {
                    if (this.props.item.category.includes(category.id)) {
                      return <option selected>{category.name}</option>;
                    } else {
                      return <option>{category.name}</option>;
                    }
                  })}
                </select>
              </div>
            </span>
            <span className="align-middle mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description..."
                type="text"
                value={
                  this.props.item.description
                    ? this.props.item.description
                    : null
                }
              />
            </span>
            <span class="align-middle mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="ingredients"
              >
                Ingredients
              </label>
              <div className="relative">
                <select
                  className="block form-multiselect appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="ingredients"
                  multiple
                >
                  {getIngredients().map((ingredient) => {
                    if (this.props.item.ingredients.includes(ingredient.id)) {
                      return <option selected>{ingredient.name}</option>;
                    } else {
                      return <option>{ingredient.name}</option>;
                    }
                  })}
                </select>
              </div>
            </span>
            <span className="align-middle mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Allergens
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Allergens..."
                type="text"
                value={
                  this.props.item.allergens ? this.props.item.allergens : null
                }
              />
            </span>
            <span className="align-middle mb-4">
              <div className="inline-flex flex-row">
                <div>
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Raw/undercooked
                  </label>
                  <input
                    type="checkbox"
                    checked={this.props.item.isUndercooked ? true : null}
                    className=" form-checkbox"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Vegetarian
                  </label>
                  <input
                    type="checkbox"
                    checked={this.props.item.vegetarian ? true : null}
                    className=" form-checkbox"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Vegan
                  </label>
                  <input
                    type="checkbox"
                    checked={this.props.item.vegan ? true : null}
                    className=" form-checkbox"
                  />
                </div>
              </div>
            </span>
          </form>
          <div
            className="z-10 absolute top-0 left-0 w-full h-full overflow-auto bg-black opacity-25 "
            onClick={() => this.setState({ isModalVisible: false })}
          ></div>
        </div>
      );
    }
    return (
      <button onClick={() => this.setState({ isModalVisible: true })}>
        <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
      </button>
    );
  }
}

export default Edititem;
