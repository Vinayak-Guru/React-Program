import React,{useState} from 'react';
import "./App.css";

function App(){
  const products=[ 
  { id:1,name:"Watch",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTulymDF-bh3dawka5FqpSMpZx8rgLKbnrpUSAH_9rWa4L8G3hlI2M_pLah08wmj54dnD6SQ9nfwr9dxBPaGpKa2uWxFmjFIGBkgIQke0FkFuNp4-ojUYaHPfo",price:800},
  { id:2,name:"Car",image:"https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg?w=424&h=239",price:500000},
  { id:3,name:"Bike",image:"https://images.livemint.com/img/2023/01/04/original/meteor_650_1672834122513.jpg",price:10000},
  { id:4,name:"Ship",image:"https://c.ndtvimg.com/2025-04/7mhfbjk8_luxury_625x300_18_April_25.png?im=FaceCrop,algorithm=dnn,width=545,height=307",price:100000000},
  { id:5,name:"Watch",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTulymDF-bh3dawka5FqpSMpZx8rgLKbnrpUSAH_9rWa4L8G3hlI2M_pLah08wmj54dnD6SQ9nfwr9dxBPaGpKa2uWxFmjFIGBkgIQke0FkFuNp4-ojUYaHPfo",price:800},
  { id:6,name:"Car",image:"https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg?w=424&h=239",price:500000},
  { id:7,name:"Bike",image:"https://images.livemint.com/img/2023/01/04/original/meteor_650_1672834122513.jpg",price:10000},
  { id:8,name:"Ship",image:"https://c.ndtvimg.com/2025-04/7mhfbjk8_luxury_625x300_18_April_25.png?im=FaceCrop,algorithm=dnn,width=545,height=307",price:100000000},
    { id:9,name:"Watch",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTulymDF-bh3dawka5FqpSMpZx8rgLKbnrpUSAH_9rWa4L8G3hlI2M_pLah08wmj54dnD6SQ9nfwr9dxBPaGpKa2uWxFmjFIGBkgIQke0FkFuNp4-ojUYaHPfo",price:800},
  { id:10,name:"Car",image:"https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg?w=424&h=239",price:500000},
  { id:11,name:"Bike",image:"https://images.livemint.com/img/2023/01/04/original/meteor_650_1672834122513.jpg",price:10000},
  { id:12,name:"Ship",image:"https://c.ndtvimg.com/2025-04/7mhfbjk8_luxury_625x300_18_April_25.png?im=FaceCrop,algorithm=dnn,width=545,height=307",price:100000000},
  ];

return(
  <div style={{
    backgroundColor:"black",
    color:"black",
    justifyContent:'center',
    textAlign:"center",
    
  }}>
    <h2 style={{
       backgroundColor:"black",
    color:"white",
    justifyContent:"center",
    textAlign:"center",
  
    }}> Amazon Cart </h2>
    {
      products.map((product)=>(
        <li style={{ listStyleType:"none",float:"right",padding:"7px",}}key={product.id}>
           <div style={{ backgroundColor:"black",
                        color:"white",
                        height:"350px",
                        width:"310px",
                        marginBottom:"250px",
                        border:"2px solid black",
                        marginRight:"10px",
                        borderRadius:"10px"
                        
                        }}>
          <img  style={{ height:"200px",width:"300px",borderRadius:"10px"}}src={product.image} alt={product.name}/>
         
            <h2> {product.name}</h2>
            <p> {product.price}</p>
          </div>

        </li>


      ))
    }
  </div>
)

}
export default App;