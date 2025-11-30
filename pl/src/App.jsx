import React,{useState}from 'react';

function App(){

  const products=[
    {id:1,name:"Glass",image:"https://optorium.in/cdn/shop/files/Ray_Ban_3025_9196_sunglass_images_01_ea299e29-fdb1-4688-ac58-401c2d053f47.jpg?v=1754383705&width=2048",price:"50,00000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:2,name:"watch",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTbvJ4G6MCVQ8ly_8OUYkkvd5sZd_dq_jgtzpHEx6n5g6qyD2mKoqTjkHn_OwEqL_MH2cfyaICRk-qoX-moxIJJy0h24tYob31Vq6bNxg6wgROCclEq_t_-A",price:"2,0000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:3,name:"Car",image:"https://i.ytimg.com/vi/mDG8ANo2Qpg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZgj4z4RRk45xu-ctT1qxI4JtwJQ",price:"50,00,000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:4,name:"Glass",image:"https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/19037770/2025/7/24/062cf8a2-9687-4822-8c43-084559ccc37d1753357411272-Voyage-Unisex-Black-Lens--Black-Wayfarer-Sunglasses-with-UV--1.jpg",price:"1,40,000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:5,name:"Glass",image:"https://optorium.in/cdn/shop/files/Ray_Ban_3025_9196_sunglass_images_01_ea299e29-fdb1-4688-ac58-401c2d053f47.jpg?v=1754383705&width=2048",price:"50,00000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:6,name:"watch",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTbvJ4G6MCVQ8ly_8OUYkkvd5sZd_dq_jgtzpHEx6n5g6qyD2mKoqTjkHn_OwEqL_MH2cfyaICRk-qoX-moxIJJy0h24tYob31Vq6bNxg6wgROCclEq_t_-A",price:"2,0000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:7,name:"Car",image:"https://i.ytimg.com/vi/mDG8ANo2Qpg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZgj4z4RRk45xu-ctT1qxI4JtwJQ",price:"50,00,000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
    {id:8,name:"Glass",image:"https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/19037770/2025/7/24/062cf8a2-9687-4822-8c43-084559ccc37d1753357411272-Voyage-Unisex-Black-Lens--Black-Wayfarer-Sunglasses-with-UV--1.jpg",price:"1,40,000",about:"Cars are vehicles that help people travel quickly and safelyand more comfortable"},
  
  ];

  return(
    <div style={{
      backgroundColor:"black",
      justifyContent:"center",
      textAlign:"center"

    }}>
      <h2 style={{
        backgroundColor:"black",
        color:"white",
        textAlign:"center",
        padding:"10px"
      }}> Amazon Cart </h2>

      { products.map((product)=>(
        <li  style={{
          listStyleType:"none",float:"right",padding:"20px"
        }} key={product.id}>
          <div style={{
            height:"100%",
            width:"290px",
            marginBottom:"100px",
            backgroundColor:"black",
            color:"white",
            border:"2px solid white",
            borderRadius:"10px",
            
          }}>

          <img style={{ height:"200px",width:"200px",marginTop:"50px",borderRadius:"10px"}}src={product.image} alt={product.name}/>

          <h2> {product.name} </h2>
          <p> ₹{product.price}</p> <button  style={{ padding:"10px 5px",}}type="button" value="Add to cart"> Add to cart</button> <button style={{ padding:"10px 5px",backgroundColor:"lightgreen",color:"red"}} type="button " value="Buy Now"> Buy Now</button>
          <p> {product.about}</p>


          </div>


        </li>

      ))
      }
    </div>
  )

}
export default App;