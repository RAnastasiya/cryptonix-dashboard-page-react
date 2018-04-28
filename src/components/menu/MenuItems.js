import React, { Component } from "react";
import MenuLinks from "../../constants/MenuLinks";

class MenuItems extends Component {
    render() {

        return (
          <div className="block-menu-items">
            <MenuLinks />
          </div>
        );
    }
}

export default MenuItems;
