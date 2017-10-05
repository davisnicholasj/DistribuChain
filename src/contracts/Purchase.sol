pragma solidity ^0.4.2;
contract Purchase
{
	address user;
	address affair;
	uint amount;
	string descr;
	mapping (address => address) private purchaseByUser;  //given the user address, obtain the purchases
	mapping (address => address) private purchaseByAffair;

    function Purchase(address _user, address _affair, uint _amount, string _descr) {
       
        user=_user;
        affair=_affair;
        amount=_amount;
        descr=_descr;
    }

    function getAmount() constant returns (uint) { return amount; }
    function getUser() constant returns (address) { return user; }
    function getAffair() constant returns (address) { return affair; }

    function getPurchaseByUser(address _user) constant returns (address){
        return purchaseByUser[_user];
    }

    function getPurchaseByAffair(address _affair) constant returns (address){
        return purchaseByAffair[_affair];
    }

}