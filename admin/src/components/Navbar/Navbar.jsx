import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link className='logo' to="/"> <NoCrashIcon style={{fontSize:24,color:"white"}}/> <h2>koreanAvto</h2></Link>

    
      <div className="icons">
      
        <Link to="/login"><PersonIcon style={{ fontSize:28,marginLeft: 10,cursor: "pointer",color:"white" }}/></Link>

        
      </div>
    </div>
  )
}

export default Navbar