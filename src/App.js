import React, { Component } from 'react'
import getWeb3 from './utils/getWeb3'
import Web3 from 'web3';


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './stylesheets/App.css'


class App extends React.Component {
  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })

        // Instantiate contract once web3 provided.
        this.instantiateContract()
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }
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
        <nav className="navbar pure-menu pure-menu-horizontal">
          <div>
            <a href="/" className="pure-menu-heading">Distribuchain</a>
            <a href="eventManagement" className="pure-menu-heading">Event Management</a>
            <a href="addPurchase" className="pure-menu-heading">Add Purchase</a>
          </div>
        </nav>




        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              Current Eth Balance<br />
              Summary of Current Events Happening <br />
              Summary of past Events
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;