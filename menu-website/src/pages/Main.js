import React from "react";
import categories from "../dummy-data/categories.json";
import items from "../dummy-data/items.json";
import ingredients from "../dummy-data/ingredients.json";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as BowlIcon } from "../assets/icons/bowl.svg";
import { ReactComponent as LeafIcon } from "../assets/icons/leaf.svg";
import { ReactComponent as SpicyIcon } from "../assets/icons/chili-pepper.svg";
import { ReactComponent as ArrowCircleUpIcon } from "../assets/icons/arrow-with-circle-up.svg";

class Main extends React.Component {
  render() {
    return (
      <div className="container flex flex-col min-h-screen bg-yellow-100 text-gray-900">
        <div className="rounded-full h-12 w-12 mr-2 mb-16 bg-orange-300 opacity-75 fixed right-0 bottom-0 shadow-md">
          <a href="#">
            {/* TODO: fade-in after ~100px, styling */}
            <ArrowCircleUpIcon className="fill-current text-yellow-100 opacity-100" />
          </a>
        </div>
        <header>
          <div className="md:hidden">
            {/* TODO: menu logic */}
            <MenuIcon
              title="menu"
              className="absolute fill-current right-0 content-end h-10 w-10 m-3"
              role={"img"}
            />
          </div>
          <div className="flex flex-col mx-auto py-4 pt-16">
            <span className="flex-1 font-thin text-center text-3xl sm:text-4xl">
              Menu
            </span>
            <nav className="flex-1 text-center mt-10 text-sm font-normal">
              <div className="inline-flex flex-wrap max-w-sm content-end ">
                {categories.map((category) => {
                  return (
                    <span className="border-b-2 border-dashed border-grey-400 mx-2 uppercase tracking-wider">
                      <a href={`#${category.name}`}>{category.name}</a>
                    </span>
                  );
                })}
              </div>
            </nav>
          </div>
        </header>
        <main className="flex flex-col flex-grow mx-auto px-6 sm:px-10 ">
          {/* section starts */}
          {categories.map((category) => {
            let i = 0;
            return (
              <div key={category.id + category.name} className="mb-4 ">
                <div className="flex justify-center">
                  <span
                    id={category.name}
                    className="flex-initial font-serif text-2xl pb-8"
                  >
                    {category.name}
                  </span>
                </div>

                {items.map((item) => {
                  if (item.category.includes(category.id)) {
                    let ingredientsArray = [];
                    return (
                      <>
                        <div
                          key={item.id + item.name}
                          className="flex flex-row h-auto"
                        >
                          <span className="flex-initial text-gray-700">
                            {(i += 1)}.
                          </span>
                          {/* name & description starts */}
                          <div className="flex flex-col flex-grow pl-1 mb-2">
                            <div className="flex flex-row items-center">
                              <span className="flex-initial mr-2 text-gray-900 font-semibold">
                                {item.name}
                              </span>
                              <div className="flex flex-row">
                                {item.vegetarian ? (
                                  <LeafIcon
                                    title="vegetarian"
                                    className="flex-initial content-end fill-current text-green-600 h-4 w-4"
                                    role={"img"}
                                  />
                                ) : (
                                  ""
                                )}
                                {item.vegan ? (
                                  <LeafIcon
                                    title="vegan"
                                    className="flex-initial content-end fill-current text-green-600 h-4 w-4"
                                    role={"img"}
                                  />
                                ) : (
                                  ""
                                )}
                                {item.spiceLevel === 3 ? (
                                  <>
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                  </>
                                ) : item.spiceLevel === 2 ? (
                                  <>
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-300 h-4 w-4"
                                      role={"img"}
                                    />
                                  </>
                                ) : item.spiceLevel === 1 ? (
                                  <>
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-600 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-300 h-4 w-4"
                                      role={"img"}
                                    />
                                    <SpicyIcon
                                      title="spicy"
                                      className="flex-initial content-end fill-current text-red-300 h-4 w-4"
                                      role={"img"}
                                    />
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <span className="flex initial font-light italic leading-tight">
                              {item.ingredients.map((itemIngredient) => {
                                ingredients.map((ingredient) => {
                                  if (ingredient.id === itemIngredient) {
                                    ingredientsArray.push(ingredient.name);
                                  }
                                });
                              })}
                              {ingredientsArray.join(", ")}
                            </span>
                          </div>
                          {/* name & description ends */}
                          <span className="justify-end text-right font-semibold text-grey-900 text-md ml-5">
                            {item.price},-
                          </span>
                        </div>
                      </>
                    );
                  }
                })}
                <div className="flex justify-center h-10 text-orange-300 mt-4 mb-2">
                  <BowlIcon className="fill-current h-6 w-6 m-3" role={"img"} />
                </div>
              </div>
            );
          })}
          {/* section ends */}
        </main>
        <footer className="pl-6 py-4 bg-orange-200">© Today's Menu</footer>
      </div>
    );
  }
}

export default Main;
