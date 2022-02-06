import React, { Component } from "react";
import Link from "./link";

class NavBar extends Component {
  state = {
    link: { url: "#", name: "Inicio" },
  };
  render() {
    return (
      <div className="bg-dark nav-container">
        <nav className="container navbar navbar-light bg-dark">
          <Link link={this.state.link} />
          <span> Total Links: {this.props.totalLinks}</span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
