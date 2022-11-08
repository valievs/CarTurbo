import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Wishlist.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Wishlist() {
  const favorite = useSelector((state)=> state.favorite)

  return (
   
    
  <>
        <div className="favorite-container" >
    
    { favorite.products.map((product) => (



   <Link to={`/product/${product?._id}`}>

      <div className='favorite-box' >
              <div className='productImg' >
                  
                  <img  src={product?.img}  alt="img" />
                  
                  <FavoriteBorderIcon style={{ fontSize:28,cursor: "pointer", color:"white",position:"absolute",right:5,top:5}} />
              </div>
        

          <div className="favorite-content" >
              <div className="price">{product?.price} ₼</div>
              <div className="model"> {product?.marka} {product?.model}</div>
                <div className="product-info">
                    <span className='carYear'>{product?.year},</span>
                    <span className='motor'>{product?.motor} L,</span>
                    <span className='mileage'>{product?.mileage} km</span>
                </div>
          </div>
      </div>

</Link>
 ))}
 </div>
  </>

  )
}

export default Wishlist