// @flow
import React from "react";
import { IAlert } from "../../types/";
/**
 * <Alert alertText="dfadfa" className="w3-red"/>
 * @param {*} param0 
 */

class Alert extends React.Component {
  state: {
    toggleClass: string
  };
  onCloseClick: Function;
  constructor(props: IAlert) {
    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.state = {
      toggleClass: "show"
    };
  }
  onCloseClick() {
    this.setState({
      toggleClass: "none"
    });
  }

  render() {
    const { alertText, className } = this.props;
    return (
      <div className={"w3-panel w3-theme " + this.state.toggleClass + " " + className}>
        <span
          className="w3-button w3-large  w3-right"
          onClick={this.onCloseClick}
        >
          &times;
        </span>
        <p>
          {alertText}
        </p>
      </div>
    );
  }
}

export default Alert;
