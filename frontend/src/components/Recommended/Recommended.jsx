import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'

function Recommended({marka}) {
    const [cars,setCars] = useState([])

    useEffect(()=>{
        const fetchCars = async ()=>{
            const res = await axios.get(`http://localhost:5000/api/products/marka?marka=${marka}`)
            setCars(res.data)
        }
        fetchCars()
    },[marka])
  return (
    <div>
        {cars.map((car)=>
        <Products key={car._id} car={car}/>
        )}
    </div>
  )
}

export default Recommended