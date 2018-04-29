import React, { Component } from "react";
import News from "./News";
import Transactions from "./Transactions";
import Overview from "./Overview";
import Wallets from "./Wallets";
import BitcoinChart from "./BitcoinChart";
import Markets from "./Markets";

class Dashboard extends Component {
    render() {

        return (
          <div className="block-dashboard">
            <div className="left-block">
              <Overview />
              <Wallets />
              <BitcoinChart />
              <Markets />
            </div>
            <div className="right-block">
              <Transactions />
              <News />
            </div>
          </div>
        );
    }
}

export default Dashboard;
