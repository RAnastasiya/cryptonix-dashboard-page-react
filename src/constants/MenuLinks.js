import React, {Component} from "react";
import {connect} from "react-redux";

class MenuLinks extends Component{
    showList(){
        return this.props.links.map ((link) => {
            return(
              <li key={link.id} >
                <div key={link.id} className={link.class}/>
              </li>
            );
        });
    }
    render(){
        return <ul>
          {this.showList()}
        </ul>;
    }
}

function mapStateToProps(state) {
    return{
        links: state.links
    };
}

export default connect(mapStateToProps)(MenuLinks);