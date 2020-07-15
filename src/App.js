import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Editor from "./pages/MenuEditor";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path exact="/">
            <Main />
          </Route>
          <Route path="/editor">
            <Editor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
