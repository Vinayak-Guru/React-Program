import React from 'react';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./Component/Home";
import About from './Component/About';
import Contact from './Component/Contact';

const App =() =>{
  return (
    <BrowserRouter>
    <div style={{
      fontFamily:"sans-serif",
      backgroundColor:"goldenrod",
      height:"200vh"
    }}>
      <nav style={{
        padding:"15px",
        display:"flex",
        backgroundColor:"black",
        width:"1300px ",
        justifyContent:"center",
       
      }}>
        <ul style={{
          gap:"50px",
          listStyle:"none",
          display:"flex",
          padding:"0",
          margin:"0",
          
          
        }}>
          <li>
            <Link to="/home" style={linkstyle}> Home</Link>
          </li>
          <li> 
            <Link to="/about" style={linkstyle}> About</Link>
          </li>
          <li> 
            <Link to="/contact" style={linkstyle}> Contact</Link>
          </li>
        </ul>
      </nav>
      <div style={{
        justifyContent:"center",
        width:"500px",
        textAlign:"center",
        marginLeft:"400px",
        marginBottom:"500px",
        fontSize:"18px",
        color:"white"
      }}> 
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}
const linkstyle={
  color:"white",
  textDecoration:"none",
  justifyContent:"center",
  fontSize:"20px",
  padding:"5px"
};
export default App;