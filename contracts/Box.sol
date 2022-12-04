// SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

contract Box{

    uint256 internal value;
     event ValueChanged( uint256 newvalue);
    function storeValue(uint256 newval)  public {
        value= newval;
        emit ValueChanged(newval);

    }

   function increment ()public{
    value= value+1;
    emit ValueChanged(value);

   }



    function retriveValue()public view returns(uint256){
        return value;

    }

    function retriveVersion() public  pure returns(uint256) {
        return 1;
    }

}
