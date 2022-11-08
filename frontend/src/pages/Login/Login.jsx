import axios from 'axios';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import './Login.css'


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {isFetching} = useSelector((state)=> state.user)


  const handleLogin = async (e) =>{
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axios.post("/auth/login", {username,password})
      dispatch(loginSuccess(res.data))
      navigate("/")
    } catch (error) {
      dispatch(loginFailure())
  }
}
  
  return (
    <div className='login'>

     
      <div className="login-container">

      <h3 className='form-title'>Login</h3>
       <form action="">

        <div className="inputBox">
          <label htmlFor="user">Username</label>
          <input type="text" id='user' placeholder='Your Username' onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        

       <div className="inputBox">
        <label htmlFor="password">Password</label>
        <input type="password" id='email' placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} />
       </div>
       </form>

        <button className='btn-form' onClick={handleLogin} disabled={isFetching}>Login</button>

        <p className='formText'>Don`t have an account?</p>
        <Link className='createAccount' to="/register">Create an account</Link>
      </div>
    </div>
  )
}

export default Login