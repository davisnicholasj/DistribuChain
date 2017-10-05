pragma solidity ^0.4.2;

contract User
{
	string email;
	address account;
	string name;
	address[] purchArray;
	mapping (string => address) private userAccountsByEmail; //Given the email, obtain the address of the User contract

	

	function User(string _email, address _account, string _name) {
		email = _email;
		account = _account;
		name = _name;
	}

	function getEmail() constant returns (string) { return email; }
	function getAccount() constant returns (address) { return account; }
	function getName() constant returns (string) { return name; }
    function getArrayLength() constant returns (uint) { return purchArray.length; }
    function getArrayIndex(uint index) constant returns (address) {return purchArray[index];}

	function setEmail(string _email) { email = _email; }
	function setAccount(address _account) { account = _account; }
	function setName(string _name) { name = _name; }
	function pushPurchArray(address _purchArray) { purchArray.push(_purchArray); }
	
	
	function addUser(string _email, address _userContract) { 
	userAccountsByEmail[_email] = _userContract; 
	}
	
	
	function getUserByEmail(string _email) constant returns (address) {
		return userAccountsByEmail[_email];
	}


}
