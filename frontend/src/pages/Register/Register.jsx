import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './Register.css' 
import { registerFailure, registerStart, registerSuccess } from '../../redux/userSlice';
import axios from "axios"

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFetching} = useSelector((state)=> state.user)


  const handleRegister = async (e) =>{
    e.preventDefault()
    dispatch(registerStart())
    try {
      const res = await axios.post("/auth/register", {username,email,password})
      dispatch(registerSuccess(res.data))
      navigate("/")
    } catch (error) {
      dispatch(registerFailure())
  }
}
  return (
    <div className='register'>


<div className="register-container">

<h3 className='form-title'>Create an account</h3>
 <form action="">

  <div className="inputBox">
    <label htmlFor="user">Username</label>
    <input type="text" id='user' placeholder='Your Username' onChange={(e)=>setUsername(e.target.value)}  />
  </div>

  <div className="inputBox">
    <label htmlFor="email">Mail</label>
    <input type="email" id='email' placeholder='Your Mail' onChange={(e)=>setEmail(e.target.value)}  />
  </div>
  

 <div className="inputBox">
  <label htmlFor="password">Password</label>
  <input type="password" id='password' placeholder='Your password' onChange={(e)=> setPassword(e.target.value)} />
 </div>
 </form>

  <button className='btn-form'  onClick={handleRegister} disabled={isFetching}>Sign Up</button>


<p className='formText'>Already have an account?</p>
  <Link className='createAccount' to="/login">Login Now</Link>
</div>
    </div>
  )
}

export default Register