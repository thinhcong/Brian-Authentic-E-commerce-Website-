import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


             
/*************  ✨ Windsurf Command 🌟  *************/
const ProductDetails = ({ productList }) => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const foundProduct = productList.find(item => item.id == params.id);
    setProductDetails(foundProduct);
  }, [productList, params.id]);
  
  return (
    
    <div className='flex flex-1 '>
        <div className='bg-amber-300'></div>
      {productDetails && (
        <div>
          <h1>{productDetails.name}</h1>
          <img src={productDetails.img} alt={productDetails.name} />
          <p>{productDetails.price.toLocaleString()} VND</p>
        </div>
      )}
      <div className='bg-amber-300'></div>
       
    </div>
  );
};
  

/*******  73606260-8b5c-4729-871d-050bc4c2ffa8  *******/

export default ProductDetails