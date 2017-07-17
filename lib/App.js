var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import Routes from "./components/routes";
import Navbar from "./components/navbar";

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _props = Object.assign({}, this.props),
          Schema = _props.Schema;

      var routes = [].concat(_toConsumableArray(Schema.leftLinks.links), _toConsumableArray(Schema.rightLinks.links)).reduce(function (a, b) {
        return b.children ? a.concat.apply(a, _toConsumableArray(b.children)).concat(b) : a.concat(b);
      }, []).map(function (_) {
        return {
          url: _.path,
          json: _.json,
          text: _.text,
          title: _.title,
          links: _.links,
          metas: _.metas
        };
      });

      return React.createElement(
        "div",
        { className: "w3-row" },
        React.createElement(Navbar, { links: Schema }),
        React.createElement(
          "div",
          { className: "w3-margin-top" },
          React.createElement(Routes, { routeList: routes })
        )
      );
    }
  }]);

  return App;
}(Component);

export default App;