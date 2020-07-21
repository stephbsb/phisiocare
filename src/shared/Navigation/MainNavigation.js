import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./MainNavigation.css";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import logo from "../../img/Logotipo_branca.svg";

class MainNavigation extends Component {
  componentDidMount() {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, { edge: "right" });
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader>
          <div className="navbar-fixed">
            <nav className="cyan">
              <div className="container">
                <div className="nav-wrapper">
                  <Link className="brand-logo left" to="/">
                    <img className="main-navigation-logo" src={logo} />
                  </Link>
                  <a
                    href="#"
                    data-target="mobile-nav"
                    className="sidenav-trigger right show-on-medium-and-down"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                  <NavLinks
                    className="right hide-on-med-and-down"
                    type={this.props.type}
                  />
                </div>
              </div>
            </nav>
          </div>
          {/* Side Nav */}
          <NavLinks
            className="sidenav"
            id="mobile-nav"
            type={this.props.type}
          />
        </MainHeader>
      </React.Fragment>
    );
  }
}

export default MainNavigation;
