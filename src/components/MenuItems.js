import React, { useState, useEffect } from "react";
import { getItems, getIngredients } from "../components/GetMenuData";
import EditItem from "./EditItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ReactComponent as SquaredCrossIcon } from "../assets/icons/squared-cross.svg";
import { ReactComponent as CircleWithPlusIcon } from "../assets/icons/circle-with-plus.svg";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log(result);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: 0,

  // change background colour if dragging
  // background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
});

const MenuItems = ({ selectedCategory }) => {
  const [state, setState] = useState({ items: [], showNewItemModal: false });

  useEffect(() => {
    let itemsCopy = [...state.items];
    getItems().map((item) => {
      if (item.category.includes(selectedCategory.id)) {
        console.log(item);
        itemsCopy = [...itemsCopy, item];
      }
    });
    setState({ ...state, items: itemsCopy });
  }, []);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      console.log("No drag destination");
      return;
    }
    console.log(result);
    console.log(state.items);

    const thisItems = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({
      items: thisItems,
    });
  };

  const hideNewItemModal = () => {
    setState({ ...state, showNewItemModal: false });
    console.log("hided");
  };

  if (!selectedCategory) {
    return <div className="block align-middle">Add a category first</div>;
  } else {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className=" w-full"
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {state.items.map((item, index) => {
                return (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        key={`${item.id}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`max-w-3xl mx-5`}
                        // style={getItemStyle(
                        //   snapshot.isDragging,
                        //   provided.draggablestyle
                        // )}
                      >
                        <div
                          className={`block mx-auto appearance-none bg-white  max-w-sm leading-relaxed border border-gray-400 h-10 hover:border-gray-500 pl-4 pr-1 py-1 mx-4 my-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline z-0 ${
                            snapshot.isDragging ? "bg-orange-200 shadow-lg" : ""
                          }`}
                        >
                          <span className="align-middle">
                            <span className="text-gray-700">{index + 1}. </span>
                            {item.name}
                            <span className="text-gray-500 text-sm ml-2 truncate">
                              {item.price} zł
                            </span>
                          </span>

                          <span className="inline-flex float-right">
                            <EditItem item={item} />
                            <button
                              onClick={() =>
                                console.info(
                                  "Remove button clicked for " + item.name
                                )
                              }
                            >
                              <SquaredCrossIcon className="fill-current text-red-400 self-center hover:text-red-500 h-8 w-8" />
                            </button>
                          </span>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="flex justify-center">
          <div
            className={`flex-row rounded-full h-12 w-12 mb-10 bg-orange-400 opacity-75 fixed bottom-0 shadow-md`}
          >
            <button
              onClick={() => setState({ ...state, showNewItemModal: true })}
            >
              <CircleWithPlusIcon
                title="Add new item"
                className="fill-current text-white opacity-100 h-12 w-12"
              />
            </button>
          </div>
          {state.showNewItemModal ? (
            <EditItem newItem hideNewItemModal={hideNewItemModal} />
          ) : (
            <></>
          )}
        </div>
      </DragDropContext>
    );
  }
};

export default MenuItems;
