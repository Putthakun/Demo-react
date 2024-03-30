import React, { useState } from 'react';
import Web3 from 'web3';
import {useNavigate} from 'react-router-dom';
import ContractABI from '../Abis/ContractABI';

function App() {
 //0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027
   const navigate = useNavigate();
  const contractAddress = "0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!window.ethereum) {
      alert('Please install MetaMask to interact with this application.');
      return;
    }

    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable(); // ขออนุญาติให้เข้าถึงบัญชี MetaMask
      const accounts = await web3.eth.getAccounts();
      const contractAddress = '0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027'; // ที่อยู่ของ Smart Contract
      const contract = new web3.eth.Contract(ContractABI, "0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027"  );

      // เรียกใช้ฟังก์ชันใน Smart Contract เพื่อเพิ่มชื่อและนามสกุล
      await contract.methods.addName(firstName, lastName).send({ from: accounts[0] });
      alert('Name added successfully!');
      navigate(`/profile?firstName=${firstName}&lastName=${lastName}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add name. Please check the console for errors.');
    }
  };

  return (
    <div>
      <h1>Add Name</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
