pragma solidity ^0.4.2;

contract Affair {
	string name;
	uint totalDebt;
	address[] userArray;
	address[] purchAffairArray;
	address[] purchValueAffairArray;

	function Affair (string _name, uint _totalDebt){
		name = _name;
		_totalDebt = 0;
		totalDebt = _totalDebt;
	
	}
	    
	    
	function getName() constant returns (string) { return name; }
	function getPurchArrayLength() constant returns (uint) { return purchAffairArray.length; }
    function getPurchArrayIndex(uint index1) constant returns (address) {return purchAffairArray[index1];}
	function getUserArrayLength() constant returns (uint) { return userArray.length; }
    function getUserArrayIndex(uint index2) constant returns (address) {return userArray[index2];}
	
	
	function setName(string _name) { name = _name; }
	function setTotalDebt(uint _totalDebt) { totalDebt = _totalDebt; }
	function pushUserToAffairArray(address _userArray) { userArray.push(_userArray); }
	function pushPurchToAffairArray(address _purchAffairArray) { purchAffairArray.push(_purchAffairArray);}

}
