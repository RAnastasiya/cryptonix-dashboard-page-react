import React, { Component } from "react";
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";

class Main extends Component {
    render() {

        return (
          <div className="block-main">
            <Header />
            <Dashboard />
          </div>
        );
    }
}

export default Main;
