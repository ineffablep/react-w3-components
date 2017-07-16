import React, { Component } from "react";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
class App extends Component {
  render() {
    const { Schema } = { ...this.props };
    let routes = [...Schema.leftLinks.links, ...Schema.rightLinks.links]
      .reduce((a, b) => {
        return b.children ? a.concat(...b.children).concat(b) : a.concat(b);
      }, [])
      .map(_ => {
        return { url: _.path, json: _.json, text: _.text };
      });

    return (
      <div className="w3-row">
        <Navbar links={Schema} />
        <div className="w3-margin-top">
          <Routes routeList={routes} />
        </div>
      </div>
    );
  }
}

export default App;
