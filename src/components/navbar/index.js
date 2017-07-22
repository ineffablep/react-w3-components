import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Img from "react-image";
import RenderNavLink from "../dropdown/renderNavLink";
import Dropdown from "../dropdown";
import uuid from "uuid";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
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

  renderToggleNav(toggleNav) {
    const { className, title, icon } = toggleNav;
    return (
      <a
        className={
          "w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right " +
          className
        }
        onClick={this.toggleNavbar}
        title={title ? title : "Toggle Navigation Menu"}
      >
        {icon ? <i className={icon}> </i> : <span> &#9776; Menu</span>}
      </a>
    );
  }

  renderLogo(logo) {
    const { link, image, textClassName } = logo;

    return (
      <Link
        to={link.path ? link.path : "/"}
        className={
          "w3-bar-item w3-button w3-wide w3-padding w3-logo-link " +
          link.className
        }
      >
        {image ? <Img {...image} /> : image.alt ? image.alt : ""}
        {link.text
          ? <span className={textClassName}>
              {link.text}
            </span>
          : ""}
      </Link>
    );
  }

  renderLinks(links) {
    return links.map(link => {
      if (!link.hiddenNav) {
        if (link.children && link.children.length > 0) {
          return <Dropdown link={link} key={uuid.v4()} />;
        } else {
          return <RenderNavLink link={link} key={uuid.v4()} />;
        }
      }
    });
  }

  renderNavLinks(navLinks, pullClass) {
    const { className, links } = navLinks;
    return (
      <div className={"w3-hide-small " + pullClass + " " + className}>
        {this.renderLinks(links)}
      </div>
    );
  }

  renderMobileNav(links) {
    const {
      navbarCloseButtonClassName,
      mobileNavClassName,
      leftLinks,
      rightLinks
    } = links;
    const navLinks = [...rightLinks.links, ...leftLinks.links];
    return (
      <nav
        className={
          "w3-sidebar w3-bar-block  w3-card-2 w3-animate-left w3-hide-medium w3-hide-large " +
          mobileNavClassName +
          " " +
          this.state.mobileNavClass
        }
      >
        <a
          onClick={this.toggleNavbar}
          className={
            "w3-bar-item w3-button w3-large w3-padding-16 " +
            navbarCloseButtonClassName
          }
        >
          Close &times;
        </a>
        {this.renderLinks(navLinks)}
      </nav>
    );
  }

  renderDesktopNav(links) {
    const { navbarClassName, toggleNav, logo, leftLinks, rightLinks } = links;
    return (
      <div className={"w3-bar " + navbarClassName} id="topNavbar">
        {this.renderToggleNav(toggleNav)}
        {this.renderLogo(logo)}
        {this.renderNavLinks(leftLinks, "w3-left")}
        {this.renderNavLinks(rightLinks, "w3-right")}
      </div>
    );
  }

  render() {
    const { links } = this.props;
    return (
      <header className="w3-row">
        {this.renderDesktopNav(links)}
        {this.renderMobileNav(links)}
      </header>
    );
  }
}
Navbar.propTypes = {
  links: PropTypes.object.isRequired
};
export default Navbar;
