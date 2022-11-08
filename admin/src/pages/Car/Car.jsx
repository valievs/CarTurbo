import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Car.css'
import {useDispatch, useSelector} from "react-redux"
import {deleteProduct, getProducts} from "../../redux/apiCalls"
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

function Car() {
const dispatch = useDispatch()
const products = useSelector(state=>state.product.products)

  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])

  const handleDelete = (id)=>{
    deleteProduct(id,dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'car', headerName: 'Car', width: 250, renderCell: (params)=>{
      return (
        <div style={{display:"flex",alignItems:"center",textTransform:"capitalize"}} >
          <img  style={{width:80, height:80,objectFit:"cover" , marginRight:10}} src={params.row.img} alt="avatar-pic" />
          {params.row.marka} {params.row.model}
        </div>
      )
    } },
    
    {
      field:"price",
      headerName: "Price",
      width: 140,
    },
    {
      field: 'action',
      headerName: "Action",
      width:150,
      renderCell: (params)=>{
        return (

          <>
          <Link to={"/product/" + params.row._id}>
            <button className="userEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon
            className="userDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        </>

        
        )
      }
    },
   
  ];
  
  
  return (
    <div className='car'>

<DataGrid
        rows={products}
        disableSelectionOnClick
        getRowId = {row=> row._id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Car