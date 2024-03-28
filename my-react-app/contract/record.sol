// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NameRegistry {
    struct Person {
        string firstName;
        string lastName;
    }

    mapping(address => Person) public people;

    function addName(string memory _firstName, string memory _lastName) public {
        require(bytes(_firstName).length > 0, "First name cannot be empty");
        require(bytes(_lastName).length > 0, "Last name cannot be empty");
        
        people[msg.sender] = Person(_firstName, _lastName);
    }

    function getName() public view returns (string memory, string memory) {
        Person memory person = people[msg.sender];
        return (person.firstName, person.lastName);
    }
}
