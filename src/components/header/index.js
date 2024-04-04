import React from 'react';
import './index.css';

const Header = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <img src='https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png' className='image-sizing' alt='kesava'/>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
        <button>Login</button>
      </ul>
    </nav>
  );
}

export default Header;
