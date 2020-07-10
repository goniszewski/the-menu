import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="bg-yellow-100 h-screen text-gray-900">
        <header>
          <div className="container flex flex-col mx-auto bg-gray-500 py-16">
            <span className="flex-1 font-thin text-center text-2xl ">Menu</span>
            <nav className="flex-1 text-center">
              <span>Pizza</span>
            </nav>
          </div>
        </header>
        <main className="container mx-auto bg-gray-300 px-6 sm:px-10">
          {/* section starts */}
          <div className="">
            <div className="flex justify-center py-8">
              <span className="flex-initial font-serif text-2xl">Pizza</span>
            </div>
            <div className="flex flex-row h-auto pb-5">
              <span className="flex-initial text-gray-700">1.</span>
              {/* name & description starts */}
              <div className="flex flex-col flex-grow pl-1">
                <span className="flex-initial">Margherita</span>
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
