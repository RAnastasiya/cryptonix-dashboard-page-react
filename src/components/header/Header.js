import React, { Component } from "react";
import Search from "./Search";
import Support from "./Support";
import UserInform from "./UserInform";

class Header extends Component {
    render() {

        return (
          <div className="flex-container wrap">
            <div className="flex-item name-page">Dashboard</div>
            <Search />
            <Support />
            <UserInform />
          </div>
        );
    }
}

export default Header;