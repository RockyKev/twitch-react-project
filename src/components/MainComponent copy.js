import React, { Component } from "react";

// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux'

const API = "https://api.twitch.tv/kraken/search/games?query=";
// const API = "https://api.twitch.tv/helix/search/games?query=";
let DEFAULT_QUERY = "star";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
      query: "star"
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

  componentDidMount() {}

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

          <div className="search-results">
            <div className="results">
              <p className="strong"> Games: </p>

              {searchData}
              {/* <ul>
                            {hits.map(hit => 
                                <li className="box" key={hit.objectID}>
                                    <a href={hit.url}> {hit.title}</a>
                                </li>
                            )}
                        </ul> */}

              {/* <p className="box"> World of Warcraft </p> */}

              {/* <p className="box"> World of Tanks </p>

                        <p className="box"> World of Warships </p>

                        <p className="box"> Worlds Adrift </p>


                        <p className="box"> World of Warcraft </p>

                        <p className="box"> World of Tanks </p>

                        <p className="box"> World of Warships </p>

                        <p className="box"> Worlds Adrift </p>


                        <p className="box"> World of Warcraft </p>

                        <p className="box"> World of Tanks </p>

                        <p className="box"> World of Warships </p>

                        <p className="box"> Worlds Adrift </p>


                        <p className="box"> World of Warcraft </p>

                        <p className="box"> World of Tanks </p>

                        <p className="box"> World of Warships </p>

                        <p className="box"> Worlds Adrift </p>
 */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
