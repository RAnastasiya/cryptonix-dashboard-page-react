import React, {Component} from "react";
import {connect} from "react-redux";
import FaEur from "react-icons/lib/fa/eur";
import FaBitcoin from "react-icons/lib/fa/bitcoin";

class Currencies extends Component{
    render(){
        return this.props.currencies.map ((currency) => {
            if (currency.id === 1) {
                return(
                  <div key={currency.id} className="currency1">
                    <div>{currency.value}<FaBitcoin/></div>
                    <div>{currency.name}<p>0.221746</p>
                    </div>
                  </div>
                );
            }else  {
                return(
                  <div  key={currency.id} className="currency2">
                    <div>{currency.value}<FaEur/></div>
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