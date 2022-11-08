import React from 'react'
import './Home.css'
import UserList from "../UserList/UserList"

function Home() {
  return (
  
    <div className="home">
      <h1 style={{textAlign:"center",paddingTop:40}}>Welcome to Admin Panel </h1>

      <UserList/>
    </div>

    
  )
}

export default Home