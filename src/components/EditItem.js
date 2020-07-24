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

  componentDidMount() {
    if (this.props.newItem) {
      this.setState({ isModalVisible: true });
    }
  }

  componentDidUpdate() {
    if (this.props.newItem && !this.state.isModalVisible) {
      this.props.hideNewItemModal();
    }
  }
  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  render() {
    if (this.state.isModalVisible) {
      return (
        <div className="">
          <button onClick={() => this.setState({ isModalVisible: true })}>
            <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
          </button>
          <form
            className="z-20 block absolute inset-0 appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 hover:border-gray-500 px-4 py-5 mx-4 my-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline overflow-auto"
            onSubmit={this.handleSubmit}
          >
            <div className="align-middle mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Item name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Name..."
                type="text"
                defaultValue={this.props.item ? this.props.item.name : null}
              />
            </div>
            <div className="align-middle mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ingredients"
              >
                Category
              </label>
              <div className="relative mb-4">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="ingredients"
                >
                  {getCategories().map((category) => {
                    if (
                      this.props.item &&
                      this.props.item.category.includes(category.id)
                    ) {
                      return (
                        <option
                          key={category.name}
                          value={category.id}
                          selected
                        >
                          {category.name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={category.name} value={category.id}>
                          {category.name}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>

            <div className="align-middle mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ingredients"
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
                    if (
                      this.props.item &&
                      this.props.item.ingredients.includes(ingredient.id)
                    ) {
                      return (
                        <option
                          key={ingredient.name}
                          value={ingredient.id}
                          selected
                        >
                          {ingredient.name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={ingredient.name} value={ingredient.id}>
                          {ingredient.name}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>
            <div className="align-middle mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description..."
                type="text"
                defaultValue={
                  this.props.item && this.props.item.description
                    ? this.props.item.description
                    : ""
                }
              />
            </div>
            <div className="align-middle mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Allergens
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Allergens..."
                type="text"
                defaultValue={
                  this.props.item && this.props.item.allergens
                    ? this.props.item.allergens
                    : ""
                }
              />
            </div>
            <div className="align-middle mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Additional info
              </label>
              <div className="inline-flex flex-row flex-wrap">
                <div className="mx-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                      checked={
                        this.props.item && this.props.item.isUndercooked
                          ? true
                          : null
                      }
                    />
                    <span className="ml-2 text-sm">Raw/undercooked</span>
                  </label>
                </div>
                <div className="mx-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                      checked={
                        this.props.item && this.props.item.vegetarian
                          ? true
                          : null
                      }
                    />
                    <span className="ml-2 text-sm">Vegetarian</span>
                  </label>
                </div>
                <div className="mx-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                      checked={
                        this.props.item && this.props.item.vegan ? true : null
                      }
                    />
                    <span className="ml-2 text-sm">Vegan</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 p-1 px-6 mt-4"
                role="submit"
                onClick={() => console.log("hi")}
              >
                Update
              </button>
            </div>
          </form>
          <div
            className="z-10 absolute top-0 left-0 w-full h-full overflow-auto bg-black opacity-25 "
            onClick={() => this.setState({ isModalVisible: false })}
          ></div>
        </div>
      );
    }
    return (
      <>
        {this.props.newItem ? (
          <></>
        ) : (
          <button onClick={() => this.setState({ isModalVisible: true })}>
            <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
          </button>
        )}
      </>
    );
  }
}

export default Edititem;
