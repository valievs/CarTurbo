
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

function NewProducts() { 
    
    const [products,setProducts] = useState([])
  
    useEffect(()=>{
      const fetchCars = async ()=>{
       try {
        const res = await axios.get("http://localhost:5000/api/products")
       
        setProducts(res.data)
       } catch (error) {
        
       }
      }
      fetchCars()
    },[])
  
  
  
  
    return (
      <div className='category'>
  
     <h2 className='avto'>Avtomobiller </h2>
  
        
      <div className="filter-container">
  
         
  
       {products.slice(0,3).map((item)=> <Product item={item} key={item._id}/>)}
        
      </div>
      </div>
    )
}

export default NewProducts