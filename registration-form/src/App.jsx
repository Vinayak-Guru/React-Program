import React,{useState}from 'react'

function App(){
  const [ registration, setRegistration ]=useState({
    name:"",
    gender:"",
    email:"",
    password:""
  });

  const [store,setStore]=useState([]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setRegistration({...registration,[name]:value});

  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(registration.name===""||
      registration.gender===""||
      registration.email===""||
      registration.password===""){
        alert("Fill form Correctly");
        return;
      }
      setStore([...store,{...registration}]);
      setRegistration({
        name:"",
        gender:"",
        email:"",
        password:""
      });
  };

  return(
    <div style={{
      justifyContent:"center",
      marginLeft:"550px",
      border:"2px solid black",
      
      padding:"60px 40px",
      borderRadius:"25px",
      boxShadow:"10px 10px 10px grey",
      backdropFilter:"blur(3px)",
      
      
    }}>
      <h2> Registration Form </h2>

      <label> <strong> Name:</strong></label>
      <input
      name="name"
      value={registration.name}
      onChange={handleChange}
      required/><br /><br />

      <label> <strong> Gender:</strong></label>
      <input
      type='radio'
      name="gender"
      value="male"
      onChange={handleChange}
      checked={registration.gender==="male"}
      required/> male

      <input
      type='radio'
      name="gender"
      value="female"
      onChange={handleChange}
      checked={registration.gender==="female"}
      required/> female <br /><br />

      <label> <strong> Email:</strong></label>
      <input
      name="email"
      value={registration.email}
      onChange={handleChange}
      required/><br /><br />

      <label> <strong> Password:</strong></label>
      <input
      type='password'
      name="password"
      value={registration.password}
      onChange={handleChange}
      required/><br /><br />

      <button onClick={handleSubmit}>Save</button>

      <h3> Registration List:</h3>
       {store.length===0?(
          <p> not Registration yet </p>
        ):(
          store.map((all,index)=>(
              <div key={index}>
                <p><strong> Name:</strong>{all.name}</p>
                <p><strong> Gender:</strong>{all.gender}</p>
                <p><strong> Email:</strong>{all.email}</p>
                <p><strong> Password:</strong>{all.password}</p>
                </div>
            ))
        )
}


    </div>
    
  );
}
export default App;
