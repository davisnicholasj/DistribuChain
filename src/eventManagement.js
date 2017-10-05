import React, { Component } from 'react';
import Web3 from 'web3';
import getWeb3 from './utils/getWeb3';
import Affair from '../build/contracts/Affair.json';

class createEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affairName: '',
      affairDebt: 0,
      web3: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })

        // Instantiate contract once web3 provided.
        console.log('web3 is active on page');
        
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCreate(event) {
    console.log('handleCreate');
    alert('The event is named: ' + this.state.affairName + ' & the current total debt is: ' + this.state.affairDebt);
    event.preventDefault();

  }

  instantiateContract(event) {
    console.log('here');
    // const contract = require('truffle-contract')
    // const Affair = contract(Affair)
    // var name = this.state.affairName;
    // var debt = this.state.affairDebt;
    // var balance = this.calculateMaxGas(Web3.eth.coinbase);

    // Affair.setProvider(this.state.web3.currentProvider)
    // Affair.new(name, debt);



    // Declaring this for later so we can chain functions on SimpleStorage.
    // var AffairInstance
    // Affair.new(1, 2, 3, quantity, product, deliveryDate, deliveryAddress, { from: this.Web3.eth.coinbase, gas: balance })
    


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
              <a href="eventManagement" className="pure-menu-heading">Event Management</a>
              <a href="addPurchase" className="pure-menu-heading">Add Purchase</a>
            </div>
          </nav>
        </div>
        <main className="container">
          <div className="Contact">
            <div className="pure-u-1-1">
              <form onSubmit={this.handleCreate}>
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