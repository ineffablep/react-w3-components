import React, { Component } from "react";
import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import * as api from "react-json-schema-form/api";
import RenderJson from "./components/renderJson";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Schema: props.Schema
    };
  }

  componentDidMount() {
    if (!this.props.Schema && this.props.SchemaUrl) {
      api.get(this.props.SchemaUrl, json => this.setState({ Schema: json }));
    }
  }

  render() {
    if (!this.state.Schema) {
      return null;
    }
    const { leftLinks, rightLinks, footer, logo, others } = this.state.Schema;
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
    routes.push({ url: logo.link });
    return (
      <div className="w3-row w3-wrapper">
        <Navbar links={this.state.Schema} />
        <div className="w3-main">
        <RenderJson json={others}/>
          <Routes routeList={routes} />
        </div>
        <div className="w3-push" />
        <Footer {...footer} />
      </div>
    );
  }
}

export default App;
