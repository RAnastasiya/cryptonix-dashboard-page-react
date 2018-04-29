import React, { Component } from "react";
import FaExclamation from "react-icons/lib/fa/exclamation-circle";

class Support extends Component {
    render() {

        return (
          <div className="flex-item support-container">
            <button className="btn-exclamation">Support
              <span className="exclamation-icon">
                <FaExclamation />
              </span>
            </button>

            <button className="btn-plus"><p>+</p></button>

          </div>
        );
    }
}

export default Support;