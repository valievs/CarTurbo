import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

function Navbar() {
  const {currentUser} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = ()=>{
   dispatch(logout())
   navigate("/")
  }

  return (
    <div className='navbar'>
      <Link className='logo' to="/"> <NoCrashIcon style={{fontSize:24,color:"white"}}/> <h2>KoCaucasus</h2></Link>

      <div className="nav">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/products/cars">Cars</Link>
        <Link className='link' to="/contact">Contact</Link>
      </div>

      <div className="icons">
        <Link to="/wishlist"><FavoriteIcon  className='navIcon wish'/></Link>
       { currentUser ? <><h3 style={{fontSize:18,paddingLeft:14,textTransform:"capitalize"}} >Hi, {currentUser.username}</h3> <LogoutIcon className="logout"  onClick={handleLogout}  /> </>: <Link to="/login"><PersonIcon className='navIcon log'/></Link>}

        <div className="langBox">
          <select name="lang" id="lang">
            <option value="aze">AZE</option>
            <option value="rus">RUS</option>
            <option value="eng">ENG</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar