import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import car1 from '../../assets/cars/car-2.png'
// import car2 from '../../assets/cars/car-3.png'
// import car3 from '../../assets/cars/car-4.png'
// import car4 from '../../assets/cars/car-5.png'
// import car5 from '../../assets/cars/car-6.png'
// import car6 from '../../assets/cars/car-7.png'
// import car7 from '../../assets/cars/car-8.png'
import Product from '../../components/Product/Product';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { addToFavorite } from '../../redux/favoriteSlice';
import { removeFromFavorite } from '../../redux/favoriteSlice';
import axios from 'axios'
import Recommended from '../../components/Recommended/Recommended';


function ProductDetails() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id)

  const [multipleImage, setMultipleImage] = useState([]);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch()
 
 
  useEffect(()=>{
    const getProduct = async()=>{
      try{
          const res = await axios.get("http://localhost:5000/api/products/find/" +id)
          setProduct(res.data)
      }catch(err){
          console.log(err)
      }
    }
    getProduct()
  },[id])

  
  // const favoriteChecker = (id)=>{
  //   const boolean = product.some((item)=> item._id === id)
  //   return boolean;
  // }


  
const handleClick = () =>{

  dispatch( addToFavorite({...product}))
}

const handleRemove = () =>{

  dispatch( removeFromFavorite({...product}))
}
    
  return (
    <>
    <div className='car-container'>

        <div className="carImgBox">
          <div className="mainImg">
            <img src={product.img} alt="img" />
          </div>

          <div className="otherImg">
          
                <div className="file-groups">
                    {multipleImage.map((e) => 
                        <div className='div' key={e._id}>
                            <div className='div-row'>
                                {e.files.map((item, index) => 
                                    <div className='file-group' key={index}>
                                        <img className='file-img' src={`http://localhost:5000/${item._id}`} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    
                </div>
            
          </div>
        </div>

          <div className="carTitleBox">
            <h3 className='carTitle'>{product.marka} {product.model} </h3>
            <span className="motor">{product.motor}L,</span>
            <span className="yeardet">{product.year}</span>
            {/* <span className="mileage">{product.mileage} km</span> */}
          </div>

          <div className="priceBox">
            <div className='price'>
            <div className='carCost'>
            <h3 className='cost'>${product.price}</h3>
            </div>

                <div className="call">
                  <LocalPhoneIcon className="phoneLocal"/>
                  <span className="phone">Call</span>

                  <Link className='icon'  to=""> <WhatsAppIcon className="whats"/> </Link>
                </div>
                
            </div>

          </div>


      <div className="info">

          <div className='character'>

          <table>
  
             <tbody>
             <tr className='table'>
                <td>Marka</td>
                <td>{product.marka}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{product.model}</td>
              </tr>
              <tr>
                <td>Buraxilish ili</td>
                <td>{product.year}</td>
              </tr>
              <tr>
                <td>Reng</td>
                <td>{product.color}</td>
              </tr>
              <tr>
                <td>Muherrik</td>
                <td>{product.motor}L</td>
              </tr>
              <tr>
                <td>Suret qutusu</td>
                <td>{product.gear}</td>
              </tr>
              <tr>
                <td>Oturucu</td>
                <td>{product.transmission}</td>
              </tr>
              <tr>
                <td>Yanacaq novu</td>
                <td>{product.petrol}</td>
              </tr>
              <tr>
                <td>Qiymet</td>
                <td>${product.price}</td>
              </tr>
             </tbody>
            </table>

            
          </div>

          <div className="desc">

           <div className="ulList">
           <ul>
              <li>Yüngül lehimli disklər</li>
              <li>Yağış sensoru</li>
              <li>Oturacaqların isidilməsi</li>
              <li>Arxa görüntü kamerası</li>
              <li>Oturacaqların ventilyasiyası</li>
            </ul>
           </div>

              <div className='descMain'>
              <p>{product.desc}</p>
              </div>
            

          </div>

             
      </div>

      <div className="favorite">

   {
    (product._id) ? 
      <div className="add" onClick={handleRemove}>
      <h5 className="addText"> <FavoriteIcon/> Remove from favorite</h5>
    </div> :

<div className="add" onClick={handleClick}>
<h5 className="addText"> <FavoriteIcon /> Add to favorite</h5>
</div>
   }
    </div>

    <div>
      <div className="featBorder"></div>
    <h3 className='feat' >Benzer Elanlar</h3>

    
    </div>

    </div>

<div className="features">
   <Recommended marka={product.marka}/>
</div>
</>
  )
}

export default ProductDetails