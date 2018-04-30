import React, {Component} from "react";
import {connect} from "react-redux";
import FaEur from "react-icons/lib/fa/eur";

class Currencies extends Component{
    render(){
        return this.props.currencies.map ((currency) => {
            if (currency.id !== 1) {
                return(
                  <div  key={currency.id} className="currency2">
                    <div>
                      <p>{currency.value}</p>
                      <FaEur/>
                    </div>
                    <p className="currency-name">{currency.name}</p>
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

export default connect(mapStateToProps)(Currencies);