import React, { Component } from "react";
import Transactions from "./Transactions";
import Overview from "./Overview";
import Wallets from "./Wallets";
import BitcoinChart from "./BitcoinChart";
import Markets from "./Markets";
import News from "../../constants/News";

class Dashboard extends Component {
    render() {

        return (
          <div className="block-dashboard">
            <div className="left-block flex-container wrap">
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
