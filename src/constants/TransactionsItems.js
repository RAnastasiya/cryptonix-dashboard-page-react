import React, {Component} from "react";
import {connect} from "react-redux";

class TransactionsItems extends Component{

    render(){
        return this.props.transactions.map ((item) => {
            return(
              <div key={item.id} className="block-transaction">
                {item.time}
                <p>{item.value}</p>
                <p>{item.key}</p>
              </div>
            );
        });
    }
}

function mapStateToProps(state) {
    return{
        transactions: state.transactions
    };
}

export default connect(mapStateToProps)(TransactionsItems);