import React from "react";
import { ReactComponent as leafIcon } from "../assets/icons/leaf.svg";

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
          <div className="">
            <div className="flex justify-center">
              <span className="flex-initial font-serif text-2xl pb-8">
                Pizza
              </span>
            </div>
            <div className="flex flex-row h-auto">
              <span className="flex-initial text-gray-700">1.</span>
              {/* name & description starts */}
              <div className="flex flex-col flex-grow pl-1">
                <div className="flex-row">
                  <span className="flex-initial mr-3">Margherita</span>
                  {/* Not displaying yet. Why? */}
                  <leafIcon className="h-10 w-10" />
                </div>
                <span className="flex initial font-light italic">
                  sos pomidorowy, mozzarella
                </span>
              </div>
              {/* name & description ends */}
              <span className="justify-end text-right font-light text-lg">
                18,-
              </span>
            </div>
          </div>
          {/* section ends */}
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default Main;
