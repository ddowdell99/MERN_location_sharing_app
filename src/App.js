import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      {/* Switch works by ensuring that if the url matches on of the route paths, then nothing else will be read */}
      <Switch>
        {/* Putting exact makes sure that whatever is inside of route will only be rendered with the EXACT path */}
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
