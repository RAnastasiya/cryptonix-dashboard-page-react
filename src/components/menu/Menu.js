import React, { Component } from "react";
import MenuItems from "./MenuItems";
import Chat from "./Chat";

class Menu extends Component {
    render() {

        return (
          <div className="block-menu">
            <div className="logo"><a href="#"/></div>
            <MenuItems />
            <Chat />
          </div>
        );
    }
}

export default Menu;
