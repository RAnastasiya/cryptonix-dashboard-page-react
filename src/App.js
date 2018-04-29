import React, { Component } from "react";
import Menu from "./components/menu/Menu";
import Dashboard from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Dashboard />
      </div>
    );
  }
}

export default App;