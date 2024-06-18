import React, { useState, useEffect } from 'react';
import './NewsProject.css'
import { Link } from 'react-router-dom';
import {useContext}  from 'react';
import { Current1 } from './News';

const NewsProject = () => {

    const [data, setData] = useState([]);
    const [search,setSearch] = useState("")
    const value =useContext(Current1);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((res)=>{
        setData(res)
      })
    })

    const display=(e)=>{
        setSearch(e.target.value);
      }
    return ( 
      <>
      <div>
      <h1 class="head">Welcome to cart</h1>
        <div className='div1'>
         <input className='sear' type="text" placeholder='enter the product' onChange={display} />
         <Link to="/NewsProduct">  <button className='btn1' >Added Carts</button></Link>
        </div>
      {data.filter(x=>x.title.toLowerCase().includes(search))
      .map(val=>{
          return(
            <div className='div1' key={val.id}>
              <img className='imgg' src={val.image} alt="" />
              <h3>{val.title} ${val.price}</h3>
              <button className='btn2' onClick={()=>value.addToCart(val)}>Add to Cart</button>
            </div>
          )
        })}
       
      </div>
      
      </>
     );
}
export default NewsProject;

