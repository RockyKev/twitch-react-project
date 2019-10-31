import React, { Component } from "react";

import SearchResults from "./SearchResultsComponent";
import Sidebar from "./SidebarComponent";

const API = "https://api.twitch.tv/kraken/search/games?query=";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
      query: ""
    };

    this.inputChange = this.inputChange.bind(this);
    this.inputKeyPress = this.inputKeyPress.bind(this);
  }

  inputChange(e) {
    this.setState({ query: e.target.value });
    this.setState({ isLoading: true });
  }

  inputKeyPress(e) {
    if (e.keyCode == 13) {
      fetch(API + this.state.query, {
        method: "get",
        headers: new Headers({
          "Client-ID": "55kfu5hfxy957tos1zc8bbshc0ym34",
          Accept: "application/vnd.twitchtv.v5+json"
        })
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong...");
          }
        })
        .then(data => {
          this.setState({ data: data.games, isLoading: false });
          console.log(this.state.data);
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    }
  }

  render() {
    const { data, isLoading, error } = this.state;
    let searchData;

    if (error) {
      searchData = <p> {error.message} </p>;
    }

    if (isLoading) {
      searchData = <p> Loading ... </p>;
    } else {
      searchData = (
        <SearchResults results={data} error={error} isLoading={isLoading} />
      );
    }

    return (
      <div className="flexbox">
        <div className="main">
          <div className="main-inner">
            <p>
              Search for your favorite games in the search box below. Click on
              their name to find out more information about them.
            </p>

            <div className="search-content">
              <div className="searchbox">
                <label> Search:</label> <br />
                <input
                  value={this.state.query}
                  onKeyDown={this.inputKeyPress}
                  onChange={this.inputChange}
                  type="text"
                  name="input"
                  placeholder="Enter stuff here"
                />
              </div>
            </div>
            {searchData}
          </div>
        </div>

        <Sidebar
          className="sidebar"
          title="World Of WarCraft"
          img="https://images-na.ssl-images-amazon.com/images/I/81bYbCOqeiL._SY679_.jpg"
          viewers={57719}
        />
      </div>
    );
  }
}

export default Main;
