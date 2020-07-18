import React, { Component } from "react";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";

class Edititem extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };
  }

  render() {
    if (this.state.isModalVisible) {
      return (
        <>
          <button onClick={() => this.setState({ isModalVisible: true })}>
            <EditIcon className="fill-current text-white self-center bg-orange-400 rounded hover:bg-orange-500 h-6 w-6 p-1 mr-2 z-0" />
          </button>
          <form className="z-20 block absolute inset-0 appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 hover:border-gray-500 px-4 py-5 mx-4 my-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <span className="align-middle mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Item name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Name"
                type="text"
              />
            </span>
          </form>
          <div
            className="z-10 absolute top-0 left-0 w-full h-full overflow-auto bg-black opacity-25 "
            onClick={() => this.setState({ isModalVisible: false })}
          ></div>
        </>
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
