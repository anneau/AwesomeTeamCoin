pragma solidity ^0.4.18;


import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract AwesomeCoin is StandardToken {
    string public constant name = "AwesomeCoin"; // solium-disable-line uppercase
    string public constant symbol = "ASC"; // solium-disable-line uppercase
    uint8 public constant decimals = 18; // solium-disable-line uppercase

    /**
    * @dev Constructor that gives msg.sender all of existing tokens.
    * @param _initialSupply : initial tokens.
    */
    function AwesomeCoin(uint256 _initialSupply) public {
        totalSupply_ = _initialSupply;
        balances[msg.sender] = _initialSupply;
        Transfer(0x0, msg.sender, _initialSupply);
    }
}
