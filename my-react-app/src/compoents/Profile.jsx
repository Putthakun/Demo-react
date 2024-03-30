import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ContractABI from '../Abis/ContractABI';


function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (!window.ethereum) {
        alert('Please install MetaMask to interact with this application.');
        return;
      }

      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(ContractABI, "0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027");
        const result = await contract.methods.getName().call({ from: accounts[0] });
        setFirstName(result[0]);
        setLastName(result[1]);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to retrieve name. Please check the console for errors.');
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
}

export default Profile;
