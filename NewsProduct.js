import React, { useContext } from 'react';

import { Current1 } from './News';

const NewsProduct = () => {

  const valuee = useContext(Current1);

  return (
    <div>
      <h1 className="head">Your Cart is Here</h1>
      {valuee.cart.length > 0 ? (
         valuee.cart.map(val => (
          <div className='div1' key={val.id}>
            <img className='imgg' src={val.image} alt={val.title} />
            <h3>{val.title} ${val.price}</h3>
           
          </div>
        ))
      ) : (
        <h1 className='PP'>Your cart is empty.</h1>
      )}
    </div>
  );
};
 

export default NewsProduct;
