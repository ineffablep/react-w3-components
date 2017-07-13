import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import uuid from "uuid";
import { toggleElement } from "../../libs/util";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
    this.state = {
      mobileNavClass: "none"
    };
  }

  toggleNavbar(e) {
    e.preventDefault();
    let mobileNavClass = this.state.mobileNavClass === "none" ? "show" : "none";
    this.setState({
      mobileNavClass: mobileNavClass
    });
  }

  redirectToLink(e) {
    e.preventDefault();
    history.push(e.target.pathname);
    this.toggleNavbar();
  }

  dropdownClick(id) {
    toggleElement(id);
  }

  getDropdownId(path) {
    return path ? path.substring(1) : uuid.v4();
  }

  renderDropdownMenu(link) {
    return (
      <div className="w3-dropdown-hover" key={uuid.v4()}>
        <NavLink
          to={link.path}
          activeClassName={
            link.activeClassName ? link.activeClassName : "w3-active"
          }
          className={link.className ? link.className : "w3-button "}
        >
          {link.text}
        </NavLink>
        <div
          className="w3-dropdown-content w3-bar-block w3-card-4"
          key={uuid.v4()}
        >
          {link.children.map(sublink => {
            return (
              <NavLink
                key={uuid.v4()}
                to={sublink.path}
                activeClassName={
                  sublink.activeClassName
                    ? sublink.activeClassName
                    : "w3-active"
                }
                className={
                  sublink.className
                    ? sublink.className
                    : "w3-bar-item w3-button "
                }
              >
                {sublink.text}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }

  renderMobileDropdownMenu(link) {
    return (
      <div className="w3-dropdown-click" key={uuid.v4()}>
        <a
          onClick={() => {
            this.dropdownClick(this.getDropdownId(link.path));
          }}
          className={link.className ? link.className : "w3-bar-item w3-button "}
        >
          {link.text} <i className="fa fa-caret-down" />
        </a>
        <div
          id={this.getDropdownId(link.path)}
          className="w3-dropdown-content w3-bar-block mobile-nav"
          key={uuid.v4()}
        >
          {link.children.map(sublink => {
            return (
              <a
                key={uuid.v4()}
                href={sublink.path}
                onClick={this.redirectToLink}
                className={
                  sublink.className
                    ? sublink.className
                    : "w3-bar-item w3-button "
                }
              >
                {sublink.text}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  renderLink(link) {
    if (link.children && link.children.length > 0) {
      return this.renderDropdownMenu(link);
    } else {
      return (
        <NavLink
          to={link.path}
          key={uuid.v4()}
          activeClassName={
            link.activeClassName ? link.activeClassName : "w3-active"
          }
          className={link.className ? link.className : "w3-bar-item w3-button "}
        >
          {link.text}
        </NavLink>
      );
    }
  }

  render() {
    return (
      <header className="w3-row">
        <div className={"w3-bar w3-theme "+ this.props.links.navbarClass} id="topNavbar">
          <a
            className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
            onClick={this.toggleNavbar}
            title={
              this.props.links.toggleNav.title
                ? this.props.links.toggleNav.title
                : "Toggle Navigation Menu"
            }
          >
            <i
              className={
                this.props.links.toggleNav.icon
                  ? this.props.links.toggleNav.icon
                  : "fa fa-bars"
              }
            />
            {this.props.links.toggleNav.text
              ? this.props.links.toggleNav.text
              : this.props.links.toggleNav.icon ? "" : "Menu"}
          </a>
          <Link to="/" className="w3-bar-item w3-button w3-wide w3-padding">
            {this.props.links.logo.image
              ? <img
                  src={this.props.links.logo.image}
                  alt={this.props.links.logo.text}
                />
              : this.props.links.logo.text
                ? this.props.links.logo.text
                : "Logo"}
          </Link>
          <div className="w3-hide-small w3-left ">
            {this.props.links.leftLinks.map(link => {
              return this.renderLink(link);
            })}
          </div>
          <div className="w3-hide-small w3-right ">
            {this.props.links.rightLinks.map(link => {
              return this.renderLink(link);
            })}
          </div>
        </div>
        <nav
          className={
            "w3-sidebar w3-bar-block w3-black w3-card-2 w3-animate-left w3-hide-medium w3-hide-large w3-theme " +
            this.state.mobileNavClass
          }
        >
          <a
            onClick={this.toggleNavbar}
            className="w3-bar-item w3-button w3-large w3-padding-16"
          >
            Close &times;
          </a>
          {this.props.links.rightLinks.map(link => {
            if (link.children && link.children.length > 0) {
              return this.renderMobileDropdownMenu(link);
            } else {
              return (
                <a
                  key={uuid.v4()}
                  href={link.path}
                  onClick={this.redirectToLink}
                  className="w3-bar-item w3-button"
                >
                  {link.text}
                </a>
              );
            }
          })}
        </nav>
      </header>
    );
  }
}
Navbar.propTypes = {
  links: PropTypes.object.isRequired
};
export default Navbar;
