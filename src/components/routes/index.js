// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid";
import RenderPage from "../renderPage";
import NotFound from "../../pages/notFound";
import { IRoutes } from "../../types";

const Routes = ({ routeList }: { routeList: Array<IRoutes> }) =>
  <div className="w3-container">
    <Switch>
      {routeList.map(_ => {
        return (
          <Route
            key={uuid.v4()}
            exact
            path={_.url}
            render={() => <RenderPage json={_.json} text={_.text} />}
          />
        );
      })}
      <Route path="*" component={NotFound} />
    </Switch>
  </div>;

export default Routes;
