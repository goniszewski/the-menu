import React, { Component } from "react";
import { getItems, getIngredients } from "../components/GetMenuData";
import { ReactComponent as SquaredCrossIcon } from "../assets/icons/squared-cross.svg";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";

export default class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    let itemsCopy = [...this.state.items];
    getItems().map((item) => {
      if (item.category.includes(this.props.selectedCategory.id)) {
        console.log(item);
        console.log(this.state.items);
        itemsCopy = [...itemsCopy, item];
      }
    });
    this.setState({ items: itemsCopy });
  }
  render() {
    if (!this.props.selectedCategory) {
      return <div className="block align-middle">Add a category first</div>;
    } else {
      return (
        <div className=" w-full">
          {this.state.items.map((item) => {
            return (
              <div key={`${item.id}`} className=" max-w-3xl mx-5">
                <div className="block mx-auto appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 h-10 hover:border-gray-500 pl-4 pr-1 py-1 mx-4 my-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <span className="align-middle">{item.name}</span>
                  <span className=" inline-flex float-right">
                    <button>
                      <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2" />
                    </button>
                    <button>
                      <SquaredCrossIcon className="fill-current text-red-400 self-center hover:text-red-500 h-8 w-8" />
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
