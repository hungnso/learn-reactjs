import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetaiPage from "./pages/DetaiPage";
import Listpage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={Listpage} exact />
        <Route path={`${match.path}/:todoID`} component={DetaiPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
