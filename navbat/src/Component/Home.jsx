import React, { useState } from 'react';

function Home() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    discription: ""
  });

  const [store, setStore] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.name === "" ||
      product.price === "" ||
      product.category === "" ||
      product.discription === ""
    ) {
      alert("Fill Form Correctly");
      return;
    }

    setStore([...store, { ...product }]);
    setProduct({
      name: "",
      price: "",
      category: "",
      discription: ""
    });
  };

  return (
    <div style={{
      alignContent:"center",
      alignItems:"center",
      border:"5px solid black",
      textAlign:"center",
      
      
      
    }}>
      <h1> Product Form </h1>

      <label> Name: </label>
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
      /><br /><br />

      <label> Price: </label>
      <input
        name="price"
        value={product.price}
        onChange={handleChange}
      /><br /><br />

      <label> Category: </label>
      <input
        name="category"
        value={product.category}
        onChange={handleChange}
      /><br /><br />

      <label> Description: </label>
      <input
        name="discription"
        value={product.discription}
        onChange={handleChange}
      /><br /><br />

      <button onClick={handleSubmit}> Save </button>
      <br /><br />

      {store.length > 0 && (
        <div>
          <h2>Saved Products</h2>

          {store.map((all, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <p><strong>Name:</strong> {all.name}</p>
              <p><strong>Price:</strong> {all.price}</p>
              <p><strong>Category:</strong> {all.category}</p>
              <p><strong>Description:</strong> {all.discription}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;
