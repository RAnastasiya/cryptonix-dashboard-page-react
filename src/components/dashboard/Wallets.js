import React, { Component } from "react";
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
              <div className="currency-of-wallet-values"><Currencies/></div>
              <div className="currency-of-wallet">
                <div className="currency-ratet"><CurrencyRatet/></div>
                <div className="currency-send">
                  <div>WALLET
                    <select>
                      <option value="BTC">BTC</option>
                      <option value="BTC1">BTC1</option>
                      <option value="BTC2">BTC2</option>
                    </select>
                    AMOUNT<p>0.233455</p>
                  </div>
                  <div>SEND TO<input placeholder="1Cs4wu6jdbchjdcjbjdjbck"/></div>
                  <div>Receice Bitcoin<button>send</button></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Wallets;