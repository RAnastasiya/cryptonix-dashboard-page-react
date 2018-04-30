import React, {Component} from "react";
import {connect} from "react-redux";

class News extends Component{

    render(){
        return this.props.news.map ((item) => {
            return(
              <div key={item.id} className="block-news">
                News
                <p>{item.description}</p>
                <p>{item.time}</p>
              </div>
            );
        });
    }
}

function mapStateToProps(state) {
    return{
        news: state.news
    };
}

export default connect(mapStateToProps)(News);