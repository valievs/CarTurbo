import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../../components/Products/Products'
import './ProductList.css'


function ProductList() {

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  console.log(cat)

  const [filters,setFilters] = useState({})
  const [sort,setSort] = useState("newest")

  const handleFilters = (e)=>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name] : value,
    })
  }

  return (
    <div className='productsPage'>
      <div className="filter-container">
          
          <div className="filter-box">
              <select name='marka' className="cars" onChange={handleFilters} >
                <option >Marka</option>
                <option value="bmw">BMW</option>
                <option value="opel">Opel</option>
                <option value="kia">Kia</option>
                <option value="hyundai">Hyundai</option>
                <option value="honda">Honda</option>
                <option value="mercedes">Mercedes</option>
                <option value="toyota">Toyota</option>
                <option value="audi">Audi</option>
                <option value="ford">Ford</option>
                <option value="infiniti">Infiniti</option>
                <option value="lexus">Lexus</option>
                <option value="jeep">Jeep</option>
                <option value="land rover">Land Rover</option>
                <option value="mazda">Mazda</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="skoda">Skoda</option>
                <option value="ssang yong">Ssang Yong</option>
                <option value="subaru">Subaru</option>
                <option value="volvo">Volvo</option>
                <option value="wolkswagen">Wolkswagen</option>
              </select>
              
                    <select className='filterPrice' onChange={e=>setSort(e.target.value)}>
                      <option value="newest">Newest</option>
                      <option value="asc">Price (asc)</option>
                      <option value="desc">Price (desc)</option>
                    </select>
                
          </div>
         
          <div className="filter-box">

          {/* <select name='model' className="cars"  onChange={handleFilters}>
                <option>Model</option>
                <option value="saab">i30</option>
                <option value="opel">m3</option>
                <option value="audi">Q8</option>
              </select> */}
              <select name='carType' className="cars " onChange={handleFilters}>
                <option disabled >Type</option>
                <option value="hetcbeck">Hetcbeck</option>
                <option value="sedan">Sedan</option>
                <option value="universal">Universal</option>
              </select>
         

          <select name="year"  className='year'  onChange={handleFilters}>
              <option>year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
          </select>
          </div>
        {/* <button className='btn'>Search</button> */}
      </div>

   <div className="productList">
   <Products filters={filters} sort={sort} cat={cat}/>
   </div>
    
  </div>
  )
}

export default ProductList