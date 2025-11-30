import React,{useState} from 'react'
import "./App.css";
function App(){
  const [ feedback, setfeedback]=useState({
    name:"",
    rating:"",
    email:"",
    commant:""
  });

  const [feedbacklist,setfeedbacklist]=useState([]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setfeedback({...feedback,[name]:value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(feedback.name===""||
      feedback.rating===""||
      feedback.email===""||
      feedback.commant===""){
        alert("Fill form Corectly ");
        return;
      }
      setfeedbacklist([...feedbacklist,feedback]);
      setfeedback({
        name:"",
        rating:"",
        email:"",
        commant:""
      });
  };
  return(
    <div
  className="feedback-animate"
  style={{
    marginLeft:"500px ",
    border:"1px solid black",
    textAlign:"center",
    padding:"70px 50px ",
    borderRadius:"30px",
    backdropFilter:"blur(5px)",
    boxShadow:"10px 10px 40px white",
  }}
>

      <h2> Feedback Form </h2>

      <label> <strong> Name:</strong></label>
      <input
      name="name"
      value={feedback.name}
      onChange={handleChange}
      /> <br></br>

      <label> <strong> Rating:</strong></label>
      <input
      type='number'
      name="rating"
      value={feedback.rating}
      onChange={handleChange}
      /> <br></br>

      <label> <strong> Email:</strong></label>
      <input
      name="email"
      value={feedback.email}
      onChange={handleChange}
      /> <br></br>

      <label> <strong> Commant:</strong></label>
      <input
      name="commant"
      value={feedback.commant}
      onChange={handleChange}
      /> <br></br>

      <button onClick={handleSubmit}> Save</button>

      <h3> Feedback list </h3>
      {
        feedbacklist.length===0?(
          <p> not yet Feedback</p>
        ):(
          feedbacklist.map((all,index)=>(
            <div style={{
      
      border:"1px solid black",
      borderRadius:"30px",
      backdropFilter:"blur(5px)",
      boxShadow:"10px 10px 10px white"
      

    }} key={index}>
              <p><strong>Name:</strong>{all.name}</p>
              <p> <strong>Rating:</strong>{all.rating}</p>
               <p> <strong>Email:</strong>{all.email}</p>
                <p> <strong>Commit:</strong>{all.commant}</p>
              </div>

          ))
        )
      }

      
    </div>
  );
}
export default App;