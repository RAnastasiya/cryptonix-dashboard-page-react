import React, { Component } from "react";
import FaBitcoin from "react-icons/lib/fa/bitcoin";
import Currencies from "../../constants/Currencies";
import CurrencyRatet from "../../constants/CurrencyRatet";

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
                <div className="currency1">
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
                <div className="currency-ratet">
                  <CurrencyRatet />
                </div>
                <div className="currency-send">
                  <div>
                    <p>WALLET</p>
                    <input/>
                    <p>AMOUNT</p>
                    <p>0.233455</p>
                  </div>
                  <div>
                    <p>SEND TO</p>
                    <input placeholder="1Cs4wu6jdbchjdcjbjdjbck"/>
                  </div>
                  <div>
                    <p>Receice Bitcoin</p>
                    <button>send</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        );
    }
}

export default Wallets;