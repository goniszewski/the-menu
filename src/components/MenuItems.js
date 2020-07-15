import React, { Component } from "react";
import { ReactComponent as SquaredCrossIcon } from "../assets/icons/squared-cross.svg";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";

export default class MenuItems extends Component {
  render() {
    return (
      <div className=" w-full">
        <div className=" max-w-3xl mx-5">
          <div className="block mx-auto appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 h-10 hover:border-gray-500 pl-4 pr-1 py-1 m-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <span className="align-middle">Pizza #1</span>
            <span className=" inline-flex float-right">
              <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1" />
              <SquaredCrossIcon className="fill-current text-red-400 self-center hover:text-red-500 h-8 w-8 ml-2" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
