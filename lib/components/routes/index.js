import React from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid";
import RenderPage from "../renderPage";
import NotFound from "../../pages/notFound";
import { IRoutes } from "../../types";

var Routes = function Routes(_ref) {
  var routeList = _ref.routeList;
  return React.createElement(
    "div",
    { className: "w3-row" },
    React.createElement(
      Switch,
      null,
      routeList && routeList.map(function (_) {
        return _ && _.path ? React.createElement(Route, {
          exact: true,
          key: uuid.v4(),
          path: _.path,
          render: function render() {
            return React.createElement(RenderPage, _);
          }
        }) : null;
      }),
      React.createElement(Route, { path: "*", component: NotFound })
    )
  );
};

export default Routes;