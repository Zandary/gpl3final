import React from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/SignUp/Signup'
import './Home.css'


const Home = (props) => {
  return (
    <div className='Home'>
      <h1>Bienvenue sur E-Pharma</h1>
      <div className='credentialWrapper'>
        <Login/>
        <Signup user={props.user}/>
      </div>
      
    </div>
  )
}

export default Home