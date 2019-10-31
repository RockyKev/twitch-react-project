import React from "react";
import "./App.css";

import Header from "./components/HeaderComponent";
import Main from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <Header title="Twitch Game Search" />
      <Main />
    </div>
  );
}

export default App;
