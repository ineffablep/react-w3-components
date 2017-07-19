import React, { Component } from "react";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
class App extends Component {
  render() {
    const { Schema } = { ...this.props };
    const { leftLinks, rightLinks, footer } = Schema;
    let routes = [...leftLinks.links, ...rightLinks.links]
      .reduce((a, b) => {
        return b.children ? a.concat(...b.children).concat(b) : a.concat(b);
      }, [])
      .map(_ => {
        return {
          url: _.path,
          json: _.json,
          text: _.text,
          title: _.title,
          links: _.links,
          metas: _.metas
        };
      });

    return (
      <div className="w3-row w3-wrapper">
        <Navbar links={Schema} />
        <div className="w3-main">
          <Routes routeList={routes} />
        </div>
        <div className="w3-push" />
        <Footer {...footer} />
      </div>
    );
  }
}

export default App;
