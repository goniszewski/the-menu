import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuStore, { MenuStoreProvider } from "./stores/MenuStore";
import Main from "./pages/Main";
import Editor from "./pages/MenuEditor";

function App() {
  return (
    <Router>
      <MenuStoreProvider>
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
      </MenuStoreProvider>
    </Router>
  );
}

export default App;
