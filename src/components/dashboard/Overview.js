import React, { Component } from "react";
import FaEllipsis from "react-icons/lib/fa/ellipsis-v";

class Overview extends Component {
    render() {

        return (
          <div className="block-overview block">
            <button>Overview<FaEllipsis /></button>
            <div>
              <div className="data-overview">
                <div className="transactions-block">
                  <div>
                    <p>2,345</p>
                    <p>Transactions</p>
                  </div>
                  <div className="wallets">
                    <p>5</p>
                    <p>Wallets</p>
                  </div>
                </div>

                <div className="current-balance">
                  <p>Current balance</p>
                  <p>USD</p>
                  <p>3.4330</p>
                </div>
                <div className="buy-block">
                  <div>
                    <p>2.7995 EUR</p>
                    <p>+12%</p>
                  </div>
                  <button>buy</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Overview;