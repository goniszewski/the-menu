import React from "react";
import categories from "../dummy-data/categories.json";
import items from "../dummy-data/items.json";
import ingredients from "../dummy-data/ingredients.json";
import { ReactComponent as LeafIcon } from "../assets/icons/leaf.svg";

class Main extends React.Component {
  render() {
    return (
      <div className="bg-yellow-100 h-screen text-gray-900">
        <header>
          <div className="container flex flex-col mx-auto py-4 pt-16">
            <span className="flex-1 font-thin text-center text-3xl sm:text-4xl">
              Menu
            </span>
            <nav className="flex-1 text-center mt-10 text-sm font-normal">
              <div className="inline-flex flex-wrap max-w-sm content-end ">
                <span className="border-b-2 border-dashed border-grey-400 mx-1 uppercase tracking-wider ">
                  Pizza
                </span>
                <span className="border-b-2 border-dashed border-grey-400 mx-1 uppercase tracking-wider">
                  Burgers
                </span>
              </div>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-6 sm:px-10">
          {/* section starts */}
          {categories.map((category) => {
            return (
              <div className="">
                <div className="flex justify-center">
                  <span className="flex-initial font-serif text-2xl pb-8">
                    {category.name}
                  </span>
                </div>

                {items.map((item) => {
                  let i = 0;
                  if (item.category.includes(category.id)) {
                    return (
                      <>
                        <div
                          key={item.id + item.name}
                          className="flex flex-row h-auto"
                        >
                          <span className="flex-initial text-gray-700">
                            {i + 1}.
                          </span>
                          {/* name & description starts */}
                          <div className="flex flex-col flex-grow pl-1">
                            <div className="flex flex-row items-center">
                              <span className="flex-initial mr-2">
                                {item.name}
                              </span>
                              <div>
                                {item.vegetarian ? (
                                  <LeafIcon
                                    title="vegetarian"
                                    className="flex-initial content-end fill-current text-green-700 h-4 w-4"
                                    role={"img"}
                                  />
                                ) : (
                                  ""
                                )}
                                {item.vegan ? (
                                  <LeafIcon
                                    title="vegan"
                                    className="flex-initial content-end fill-current text-green-700 h-4 w-4"
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <span className="flex initial font-light italic">
                              {item.ingredients.map((itemIngredient) => {
                                ingredients.map((ingredient) => {
                                  if (ingredient.id === itemIngredient) {
                                    console.log(ingredient.name);
                                    return (
                                      <>
                                        <span
                                          key={ingredient.id + ingredient.name}
                                        >
                                          {ingredient.name}
                                        </span>
                                      </>
                                    );
                                  } else {
                                    return <span>nada</span>;
                                  }
                                });
                              })}
                            </span>
                          </div>
                          {/* name & description ends */}
                          <span className="justify-end text-right font-light text-lg">
                            {item.price},-
                          </span>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            );
          })}
          {/* section ends */}
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Main;
