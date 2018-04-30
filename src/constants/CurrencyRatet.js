import React, {Component} from "react";
import {connect} from "react-redux";
import FaEllipsis from "react-icons/lib/fa/ellipsis-v";

class CurrencyRatet extends Component{
    render(){
        return this.props.currencies.map ((currency) => {
            var strokeDasharray = (currency.percent * 0.85) + " 220";
            if (currency.id !== 4){
                return(
                  <div  key={currency.id} >
                    <svg width="35" height="35">
                      <circle r="13.5" cx="20" cy="20" />
                      <circle r="13.5" cx="20" cy="20" style={{strokeDasharray: strokeDasharray}} />


                    </svg>
                    <p>{currency.percent}%</p>
                    <p>{currency.name}</p>
                    <FaEllipsis/>
                  </div>
                );
            }
        });
    }
}

function mapStateToProps(state) {
    return{
        currencies: state.currencies
    };
}

export default connect(mapStateToProps)(CurrencyRatet);