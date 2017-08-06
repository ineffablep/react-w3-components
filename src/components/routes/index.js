// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid";
import RenderPage from "../renderPage";
import NotFound from "../../pages/notFound";
import { IRoutes } from "../../types";

const Routes = ({ routeList }: { routeList: Array<IRoutes> }) =>
  <div className="w3-row">
    <Switch>
      {routeList &&
        routeList.map(_ => {
          return _ && _.path
            ? <Route
                exact
                key={uuid.v4()}
                path={_.path}
                render={() => <RenderPage {..._} />}
              />
            : null;
        })}
      <Route path="*" component={NotFound} />
    </Switch>
  </div>;

export default Routes;
