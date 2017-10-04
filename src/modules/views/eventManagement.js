import React, { Component } from "react";
import Web3 from 'web3';

class createEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affairName: '',
      affairDebt: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('The event is named: ' + this.state.affairName + ' & the current total debt is: ' + this.state.affairDebt);
    event.preventDefault();
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
        <div>
          <nav className="navbar pure-menu pure-menu-horizontal">
            <div>
              <a href="/" className="pure-menu-heading">Distribuchain</a>
              <a href="createEvent" className="pure-menu-heading">Event Management</a>
              <a href="addPurchase" className="pure-menu-heading">Add Purchase</a>
            </div>
          </nav>
        </div>
        <main className="container">
          <div className="Contact">
            <div className="pure-u-1-1">
              <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                  Name: <input type="text" name="affairName" value={this.state.affairName} onChange={this.handleInputChange} />
                  Debt: <input type="number" name="affairDebt" value={this.state.affairDebt} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </main>
      </div>


    );
  }
}

export default createEvent;