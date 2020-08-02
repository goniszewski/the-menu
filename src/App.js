import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Editor from "./pages/MenuEditor";
import store from "./components/stores/MenuStore";

const MenuStoreContext = createContext(store);

function App() {
  return (
    <MenuStoreContext.Provider value={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/editor">
              <Editor />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </MenuStoreContext.Provider>
  );
}

export default App;
