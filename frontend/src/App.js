import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Dashboard from "./Dashboard.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
