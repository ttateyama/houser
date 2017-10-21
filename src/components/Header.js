import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/header_logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <div className='Header-content'>
        <Link to='/'>
            <div className='Header-content-left'>
            <img src={logo} className='Header-logo' alt='logo'/>
            <h1 className='Header-title'>
                <span><span className='span-bold'>Houser</span> Dashboard</span>
            </h1>
            </div>
        </Link>
        <Link to='/'>
            <div className='Header-content-right'>
            <div className='Header-logout'>Logout</div>
            </div>
        </Link>
        </div>
    </div>
  );
};

export default Header;