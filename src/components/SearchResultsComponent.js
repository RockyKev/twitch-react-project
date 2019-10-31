import React, { Component } from "react";

const API = "https://api.twitch.tv/kraken/search/games?query=";
let DEFAULT_QUERY = "star";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: props.results,
      isLoading: props.isLoading,
      error: props.error
    };
  }

  render() {
    const { results } = this.state;

    let content = (
      <ul>
        {results.map(result => (
          <li className="box" key={result._id}>
            <a href={result.box.large}> {result.name}</a>
          </li>
        ))}
      </ul>
    );

    return (
      <div className="search-results">
        <div className="results">
          <p className="strong"> Games: </p>
          {content}
          {console.log(results)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
