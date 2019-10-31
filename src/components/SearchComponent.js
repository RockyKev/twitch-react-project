import React, { Component } from "react";

const API = "https://api.twitch.tv/kraken/search/games?query=";
let DEFAULT_QUERY = "star";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
      query: ""
    };

    this.inputChange = this.inputChange.bind(this);
    this.inputKeyPress = this.inputKeyPress.bind(this);
  }

  inputChange(e) {
    this.setState({ query: e.target.value });
  }

  inputKeyPress(e) {
    this.setState({ isLoading: true });

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
          // this.setState({ hits: data.hits, isLoading: false })
          this.setState({ hits: data.games, isLoading: false });
          console.log(this.state.hits);
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    }
  }

  render() {
    const { hits, isLoading, error } = this.state;
    let searchData;

    if (error) {
      searchData = <p> {error.message} </p>;
    }

    if (isLoading) {
      searchData = <p> Loading ... </p>;
    } else {
      searchData = (
        <ul>
          {hits.map(hit => (
            <li className="box" key={hit._id}>
              <a href={hit.box.large}> {hit.name}</a>
            </li>
          ))}
        </ul>
      );
      //   console.log(hits);
    }

    return (
      <React.Fragment>
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

        <div className="search-results">
          <div className="results">
            <p className="strong"> Games: </p>
            {searchData}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResults;
