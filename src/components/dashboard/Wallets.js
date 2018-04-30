import React, { Component } from "react";
import FaBitcoin from "react-icons/lib/fa/bitcoin";
import Currencies from "../../constants/Currencies";

class Wallets extends Component {
    render() {

        return (
          <div className="block-wallets block">
            <div className="wallets-add">
              <p>My wallets</p>
              <button>Add wallet</button>
            </div>
            <div className="wallets-values">
              <div className="currency-of-wallet-values">
                <div>
                  <div>
                    <p>BTC</p>
                    <FaBitcoin />
                  </div>
                  <div>
                    <p>Bitcoin</p>
                    <p>0.221746</p>
                  </div>
                </div>
                <Currencies />
              </div>
              <div className="currency-of-wallet">
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>

          </div>
        );
    }
}

export default Wallets;