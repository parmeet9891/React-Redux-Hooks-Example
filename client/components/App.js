import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Single from "./Single";
import "./../styles/style.styl";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/view/:id" component={Single} />
      </Router>
    </div>
  );
};

export default App;
