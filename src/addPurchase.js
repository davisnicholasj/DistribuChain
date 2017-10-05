import React, { Component } from "react";
import Web3 from 'web3';

class addPurchase extends Component {
  calculateMaxGas(acc) {
    var accBalance = (Web3.eth.getBalance(acc)).toNumber();
    var gasLimit = Math.floor(Web3.eth.getBlock("latest").gasLimit * 0.95);
    var gasLimitValue = gasLimit * Web3.eth.gasPrice;
    if (accBalance >= gasLimitValue) {
      return gasLimit;
    } else {
      return Math.floor((accBalance / Web3.eth.gasPrice) * 0.95);
    }
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar pure-menu pure-menu-horizontal">
            <div>
              <a href="/" className="pure-menu-heading">Distribuchain</a>
              <a href="eventManagement" className="pure-menu-heading">Event Management</a>
              <a href="addPurchase" className="pure-menu-heading">Add Purchase</a>
            </div>
          </nav>
        </div>
        <main className="container">
          <div className="Contact">
            <div className="pure-u-1-1">
              Create Purchase page: include every input from the Purchase Contract
            </div>
          </div>
        </main>
      </div>


    );
  }
}

export default addPurchase;