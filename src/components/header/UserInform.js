import React, { Component } from "react";
import FaBars from "react-icons/lib/fa/bars";
import FaUser from "react-icons/lib/fa/user";

class UserInform extends Component {
    render() {

        return (
          <div className="flex-item user-info-container">
            <div className="menu-user-info">
              <FaBars />
            </div>
            <div className="user-icon">
              <div className="user-name"><p>John Doe</p></div>
              <FaUser />
            </div>

          </div>
        );
    }
}

export default UserInform;
