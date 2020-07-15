import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getCategories } from "../components/GetMenuData";
import MenuItem from "../components/MenuItems";
import { ReactComponent as CircleWithPlusIcon } from "../assets/icons/circle-with-plus.svg";
import MenuItems from "../components/MenuItems";

class MenuEditor extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex flex-col">
          <header className="flex-row m-4">
            <span className="text-xl text-gray-900">Editor</span>
          </header>
          <ul class="flex border-b px-2 overflow-x-auto overflow-y-hidden scrolling-touch">
            <li class="-mb-px mr-1">
              <a
                class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-orange-500 font-semibold "
                href="#"
              >
                Pizza
              </a>
            </li>

            {getCategories().map((category) => {
              return (
                <li class="mr-1">
                  <a
                    class="bg-white inline-block py-2 px-4 text-orange-400 hover:text-orange-500 font-semibold"
                    href="#"
                  >
                    {category.name}
                  </a>
                </li>
              );
            })}
            <li class="mr-1">
              <a
                class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
                href="#"
              >
                inactive
              </a>
            </li>
            <li class="mr-1">
              <a
                class="mx-auto pt-1 bg-white inline-block py-0 px-0 text-orange-400 hover:text-orange-500 font-semibold"
                href="#"
              >
                <CircleWithPlusIcon className="w-8 h-8 fill-current" />
              </a>
            </li>
          </ul>
          <main>
            <MenuItems />
          </main>
        </div>
      </div>
    );
  }
}

export default MenuEditor;
