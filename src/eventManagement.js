import React, { Component } from 'react';
import Web3 from 'web3';
import getWeb3 from './utils/getWeb3';
import AffairContract from '../build/contracts/Affair.json';
import SimpleStorageContract from '../build/contracts/SimpleStorage.json';


class createEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affairName: '',
      affairDebt: 0,
      pastAffairDebt: 0,
      pastAffairName: '',
      web3: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3.then(results => {
      this.setState({ web3: results.web3 })

      // Instantiate contract once web3 provided.
      console.log('web3 is active on page');
    }).catch(() => { console.log('Error finding web3.') })
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
    this.instantiateContract(this.state.affairName, this.state.affairDebt);
    alert('The event is named: ' + this.state.affairName + ' & the current total debt is: ' + this.state.affairDebt);

  }

  instantiateContractOriginal() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, { from: accounts[0] })
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  instantiateContract() {

    const contract = require('truffle-contract')
    const affair = contract(AffairContract)
    affair.setProvider(this.state.web3.currentProvider)

    var name = this.state.affairName;
    var debt = this.state.affairDebt;

   
    affair.new(name, debt).then(function (affair){
      console.log();
    });
    affair.address;
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
      <div className="App" >
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
          <div className="form-table">
            <div>
              <div>
                <form className="form-newEvent" onSubmit={this.handleCreate}>
                  <label><h2>Create a new event</h2>
                    <input type="text" placeholder="Event Name" name="affairName" value={this.state.affairName} onChange={this.handleInputChange} /><br />
                    <input type="number" name="affairDebt" value={this.state.affairDebt} onChange={this.handleInputChange} /><br />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
              <div>
                <form className="form-existingEvent" onSubmit={this.handleCreate}>
                  <label><h2>View details of existing Event</h2>
                    <input type="text" placeholder="Past Event Name" name="affairName" value={this.state.pastAffairName} onChange={this.handleInputChange} /><br />
                    <input type="number" name="affairDebt" value={this.state.pastAffairDebt} onChange={this.handleInputChange} /><br />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>

            </div>

          </div>
          <div className="event-content">
            <h1>content to be upated based on what events exist</h1>
          </div>
        </main>
      </div >


    );
  }
}

export default createEvent;