import React, { useState } from 'react';
import './MyForm.css'; // Import CSS file for styles

function MyForm() {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    Name: '',
    age: '',
    gender: '',
    number: '',
    address: '',
    drugallergy: '',
    congenitaldisease: '',
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <label>
        Name:
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        number:
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        drug allergy:
        <input
          type="text"
          name="drugallergy"
          value={formData.drugallergy}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
      Congenital disease:
        <input
          type="text"
          name="congenitaldisease"
          value={formData.congenitaldisease}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
