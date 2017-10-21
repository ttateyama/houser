import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='Login'>
      <div className='Login-head'>
        <img className='Login-image' src={require(`${'../images/auth_logo.png'}`)} alt='login'/>
        <div className='Login-input'>
          <label className='Login-username-text Login-text' for="userName">Username</label>
          <input className='Login-input' id="userName"/>          
          <label className='Login-password-text Login-text' for="userPassword">Password</label>
          <input className='Login-input' id="userPassword" type="password"/>
        </div>
        <div className='Login-buttons'>
          <Link to='/dashboard' className='Login-button button-1'>Login</Link>
          <Link to='/dashboard' className='Login-button button-2'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;