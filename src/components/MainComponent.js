import React, { Component } from "react";
import Searchbar from "./SearchComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <div className="main-inner">
          <p>
            Search for your favorite games in the search box below. Click on
            their name to find out more information about them.
          </p>

          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Main;
