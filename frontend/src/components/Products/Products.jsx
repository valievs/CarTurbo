
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './Products.css'

function Products({cat, filters, sort}) {

  const [products,setProducts] = useState([])
  const [ filtered,setFiltered] = useState([])

  useEffect(()=>{
    const fetchCars = async ()=>{
     try {
      const res = await axios.get( cat ? `http://localhost:5000/api/products?categories=${cat}`
                                        : "http://localhost:5000/api/products")
     
      setProducts(res.data)
     } catch (error) {
      
     }
    }
    fetchCars()
  },[cat])

  useEffect(() => {
      cat && setFiltered(
        products.filter((item) =>{
          return(
        
          Object.entries(filters).every(([key, value]) =>{
            return(
              item[key].includes(value)
            )
          })
            
          )
  })
      );
  }, [cat,products, filters]);

  useEffect(()=>{
    if(sort === "newest"){
      setFiltered(prev=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }else if ((sort === "asc")){
      setFiltered((prev)=>
      [...prev].sort((a,b)=> a.price - b.price))
    }else{
      setFiltered((prev)=>
      [...prev].sort((a,b)=> b.price - a.price))
    }
  },[sort])


  return (
    <div className='category'>

   <h2 className='avto'>Avtomobiller </h2>

      
    <div className="filter-container">

       

     {cat ? filtered.map((item)=><Product item={item} key={item._id}/>) 
               : products.slice(0,12).map((item)=> <Product item={item} key={item._id}/>)}
      
    </div>
    </div>
  )
}

export default Products