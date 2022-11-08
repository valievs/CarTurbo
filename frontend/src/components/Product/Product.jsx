import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Product.css'
import { Link } from 'react-router-dom';

function Product({item}) {
  return (

    <>
    
    <div className='product-container'>


          
        <div className="product-box">
      
          <div className='productImg'>
          
          <FavoriteBorderIcon style={{ fontSize:28,cursor: "pointer", color:"white",position:"absolute",right:5,top:5}}  />
         
          
          <img  src={item?.img}  alt="img" />
          </div>
          <Link to={`/product/${item?._id}`}>

          <div className="product-content">
            <div className="price">{item?.price} ₼</div>
            <div className="model"> {item?.marka} {item?.model}</div>
            <div className="product-info">
                <span className='carYear'>{item?.year},</span>
                <span className='motor'>{item?.motor} L,</span>
                <span className='mileage'>{item?.mileage} km</span>
            </div>
            
          </div>
          </Link>
        </div>
    

        
    
    </div>
    </>
  )
}

export default Product