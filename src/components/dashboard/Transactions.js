import React, { Component } from "react";
import TransactionsItems from "../../constants/TransactionsItems";

class Transactions extends Component {
    render() {

        return (
          <div className="block-transactions">
            Transactions
            <ul>
              <li>ALL</li>
              <li>SEND</li>
              <li>RECENT</li>
            </ul>
            <TransactionsItems />
          </div>
        );
    }
}

export default Transactions;