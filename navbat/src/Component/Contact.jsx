import React ,{useState}from 'react';

function Contact(){
  const [product,Setproduct]=useState({
    name:"",
    price:"",
    category:"",
    discription:""
  });

  const [store,Setstore]=useState([]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    Setproduct({...product,[name]:value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(product.name===""||
      product.price===""||
      product.category===""||
      product.discription===""){
        alert("Fill Form Correctly");
        return;
      }
      Setstore([...store,{...product}]);
      Setproduct({
        name:"",
        price:"",
        category:"",
        discription:""
      });
  };
  return (
    <div style={{
      alignContent:"center",
      alignItems:"center",
      border:"5px solid black",
      textAlign:"center",
      
      
      
    }}>
    
    
      <h2> Product Form </h2>
      <label> Name:</label>
      <input
      name="name"
      value={product.name}
      onChange={handleChange}/><br></br><br></br>

      <label> Price:</label>
      <input
      name="price"
      value={product.price}
      onChange={handleChange}/><br></br><br></br>

      <label> Category:</label>
      <input
      name="category"
      value={product.category}
      onChange={handleChange}/><br></br><br></br>

      <label> Discription:</label>
      <input
      name="discription"
      value={product.discription}
      onChange={handleChange}/><br></br><br></br>

      <button onClick={handleSubmit}> Save</button>


      <h3> Product List:</h3>
      { store.lenght===0?(
        <h4> not yet list</h4>

      ):(
        
          store.map((all,index)=>(
            <div className='store' key={index}>

               <p> <strong> Name:</strong>{all.name}</p>
               <p> <strong> Price:</strong>{all.price}</p>
               <p> <strong> Category:</strong>{all.category}</p>
               <p> <strong> Discription:</strong>{all.discription}</p>

            </div>

           

          )))
    }

  
    </div>
    
  );


}
export default Contact;