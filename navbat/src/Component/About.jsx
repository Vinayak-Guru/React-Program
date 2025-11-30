import React, { useState } from "react";


function About() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    password: ""
  });

  const [store, setStore] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.gender === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Fill form correctly");
      return;
    }

    alert("Form Registered Successfully");

    setStore([...store, { ...formData }]);

    setFormData({
      name: "",
      gender: "",
      email: "",
      password: ""
    });
  };

  return (
    <div style={{
      alignContent:"center",
      alignItems:"center",
      border:"5px solid black",
      textAlign:"center",
      
      
      
    }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        /> Female

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Save</button>
      </form>

      
<h3>Stored Data:</h3>

{store.length === 0 ? (
  <p>No data submitted yet.</p>
) : (
  <div>
    {store.map((item, index) => (
      <div 
        key={index} 
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "300px"
        }}
      >
        <p><strong>Entry {index + 1}</strong></p>
        <p><strong>Name:</strong> {item.name}</p>
        <p><strong>Gender: </strong>{item.gender}</p>
        <p><strong>Email: </strong>{item.email}</p>
       
      </div>
    ))}
  </div>
)}

    </div>
  );
}

export default About;
