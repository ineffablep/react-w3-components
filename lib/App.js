var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import * as api from "react-json-schema-form/api";
import RenderJson from "./components/renderJson";

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      Schema: props.Schema
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.Schema && this.props.SchemaUrl) {
        api.get(this.props.SchemaUrl, function (json) {
          return _this2.setState({ Schema: json });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.Schema) {
        return null;
      }
      var _state$Schema = this.state.Schema,
          leftLinks = _state$Schema.leftLinks,
          rightLinks = _state$Schema.rightLinks,
          footer = _state$Schema.footer,
          logo = _state$Schema.logo,
          others = _state$Schema.others;

      var links = [];
      if (leftLinks && leftLinks.links) {
        links.push.apply(links, _toConsumableArray(leftLinks.links));
      }
      if (rightLinks && rightLinks.links) {
        links.push.apply(links, _toConsumableArray(rightLinks.links));
      }
      var routes = links.reduce(function (a, b) {
        return b.children ? a.concat.apply(a, _toConsumableArray(b.children).concat([b])) : a.concat(b);
      }, []).map(function (_) {
        return Object.assign({}, _);
      });

      if (logo) {
        routes.push(Object.assign({}, logo.link));
      }
      return React.createElement(
        "div",
        { className: "w3-row w3-wrapper" },
        React.createElement(Navbar, { links: this.state.Schema }),
        React.createElement(
          "div",
          { className: "w3-main" },
          React.createElement(RenderJson, { json: others }),
          React.createElement(Routes, { routeList: routes })
        ),
        React.createElement("div", { className: "w3-push" }),
        React.createElement(Footer, footer)
      );
    }
  }]);

  return App;
}(Component);

export default App;