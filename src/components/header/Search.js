import React, { Component } from "react";
import FaSearch from "react-icons/lib/fa/search";

class Search extends Component {


    render() {
        return (
          <div className="flex-item search-container">
            <input type="search" id="search" placeholder="Search..."/>
            <span className="search-icon">
              <FaSearch />
            </span>
          </div>
        );
    }
}

export default Search;