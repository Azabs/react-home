import React, { Component } from "react";

//This component needs a js object called link with url and name as props
class Link extends Component {
  getFavicon() {}

  render() {
    return (
      <a className="col-sm" href={this.props.link.url}>
        {this.props.link.name}
      </a>
    );
  }
}

export default Link;

//this piece of code allows favicons to be introduced next to the link
//ended up removing it because it did't always work properly
/*
<img
  className="fav-icon"
  src={
    "http://www.google.com/s2/favicons?domain=" + this.props.link.url
  }
/>
*/
