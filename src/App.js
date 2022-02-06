import React from "react";
import { Component } from "react/cjs/react.production.min";
import Link from "./components/link.jsx";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends Component {
  state = {
    links: [
      { url: "https://www.youtube.com/", name: "youtube" },
      { url: "https://stackoverflow.com/", name: "stack" },
      { url: "https://github.com", name: "github" },
      { url: "https://www.imgur.com/", name: "imgur" },
      { url: "https://gmail.com", name: "gmail" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalLinks={this.state.links.length} />
        <div className="container text-center">
          <img id="main-image" src="./home-page.png" alt="Homepage Logo"></img>
          <div id="main-links" className="row">
            {this.state.links.map((link) => (
              <Link key={link.name} link={link} />
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
