import React, { useState, useEffect } from "react";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import {
  getItems,
  getIngredients,
  getCategories,
} from "../components/GetMenuData";

const Edititem = ({ item, newItem, hideNewItemModal }) => {
  const [state, setState] = useState({ isModalVisible: false, item: {} });

  useEffect(() => {
    setState({ ...state, isModalVisible: true });
  }, [newItem]);
  useEffect(() => {
    if (item) {
      setState({ ...state, item: item });
    }
  }, [item]);

  useEffect(() => {
    if (newItem && !state.isModalVisible) {
      hideNewItemModal();
    }
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    const selectedOptions = target.selectedOptions;
    let options = [];
    let thisValue;

    const isValueAllNum = /^\d+$/.test(value);

    if (selectedOptions) {
      const options = Array.from(target.selectedOptions, (option) =>
        parseInt(option.value)
      );
    }

    // function isOptionsAllNum() {
    //   let array = [];
    //   options.map((option) => {
    //     if (/^\d+$/.test(option)) {
    //       array.push(parseInt(option));
    //     } else {
    //       return options;
    //     }
    //   });
    //   return array;
    // }

    if (isValueAllNum) {
      const thisValue = parseInt(value);
    }

    console.log(options);
    console.log({
      item: {
        ...state.item,
        [id]: options[0] ? options : value === "on" ? true : value,
      },
    });
    setState({
      ...state,
      item: {
        ...state.item,
        [id]: options[0] ? options : value === "on" ? true : value,
      },
    });
  };

  const handleSubmit = (event) => {
    console.log(event);
    console.log(state);
    event.preventDefault();
  };

  if (state.isModalVisible) {
    return (
      <div className="">
        <button onClick={() => setState({ ...state, isModalVisible: true })}>
          <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
        </button>
        <form
          className="z-20 block absolute inset-0 appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 hover:border-gray-500 px-4 py-5 mx-4 my-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline overflow-auto"
          onSubmit={handleSubmit}
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
              value={state.item.name || null}
              onChange={handleChange}
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
                id="category"
                onChange={handleChange}
              >
                {getCategories().map((category) => {
                  if (
                    state.item.category &&
                    state.item.category.includes(category.id)
                  ) {
                    return (
                      <option key={category.name} value={category.id} selected>
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
                onChange={handleChange}
                multiple
              >
                {/* sort below list alphabetically first */}
                {getIngredients().map((ingredient) => {
                  if (
                    state.item.ingredients &&
                    state.item.ingredients.includes(ingredient.id)
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
              value={state.item.description || ""}
              onChange={handleChange}
            />
          </div>
          <div className="align-middle mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Allergens
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="allergens"
              placeholder="Allergens..."
              type="text"
              value={state.item.allergens || ""}
              onChange={handleChange}
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
                    id="isUndercooked"
                    className="form-checkbox text-indigo-600"
                    checked={state.item.isUndercooked ? true : null}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-sm">Raw/undercooked</span>
                </label>
              </div>
              <div className="mx-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="vegetarian"
                    className="form-checkbox text-indigo-600"
                    checked={state.item.vegetarian ? true : null}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-sm">Vegetarian</span>
                </label>
              </div>
              <div className="mx-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="vegan"
                    className="form-checkbox text-indigo-600"
                    checked={state.item.vegan ? true : null}
                    onChange={handleChange}
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
          onClick={() => setState({ ...state, isModalVisible: false })}
        ></div>
      </div>
    );
  }
  return (
    <>
      {newItem ? (
        <></>
      ) : (
        <button onClick={() => setState({ ...state, isModalVisible: true })}>
          <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
        </button>
      )}
    </>
  );
};

export default Edititem;
