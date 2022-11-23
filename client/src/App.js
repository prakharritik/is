import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import CreateInterview from "./components/CreateInterview";
import UpdateInterview from "./components/UpdateInterview";
import ViewInterview from "./components/ViewInterview";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={CreateInterview} />
          <Route path="/view-interview" component={ViewInterview} />
          <Route path="/update-interview" component={UpdateInterview} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
