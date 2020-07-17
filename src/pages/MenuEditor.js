import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getCategories } from "../components/GetMenuData";
import { ReactComponent as CircleWithPlusIcon } from "../assets/icons/circle-with-plus.svg";
import MenuItems from "../components/MenuItems";

class MenuEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: getCategories()[0] };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="flex flex-col">
          <header className="flex-row m-4">
            <span className="text-xl text-gray-900">Editor</span>
          </header>
          <ul className="flex border-b px-2 overflow-x-auto overflow-y-hidden scrolling-touch">
            {getCategories().map((category) => {
              return (
                <li key={category.id} className="mr-1">
                  <button
                    key={`${category}-button`}
                    className={`outline-none bg-white inline-block py-2 px-4 select-none  ${
                      category === this.state.selectedCategory
                        ? `text-orange-500 border-l border-t border-r rounded-t`
                        : `text-orange-400 hover:text-orange-500`
                    }  font-semibold`}
                    onClick={() => {
                      this.setState({ selectedCategory: category });
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              );
            })}
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
                href="#"
              >
                inactive
              </a>
            </li>
            <li className="mr-1">
              <a
                className="mx-auto pt-1 bg-white inline-block py-0 px-0 text-orange-400 hover:text-orange-500 font-semibold"
                href="#"
              >
                <CircleWithPlusIcon className="w-8 h-8 fill-current" />
              </a>
            </li>
          </ul>
          <main>
            <MenuItems
              key={`${this.state.selectedCategory.id}-items`}
              selectedCategory={this.state.selectedCategory}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default MenuEditor;
