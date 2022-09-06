import React from 'react'
import './topbar.css';

function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
      <ul className='topList'>
        <li className='topListItem'>BLOGS</li>
      </ul>
      </div>
    
      <div className='topRight'>
        <img
        className='topImg' 
        src='https://post.healthline.com/wp-content/uploads/2020/09/AN88-Cucumbers-732x549-thumb-1-732x549.jpg' 
        alt='farm' 
        />
      </div>

    </div>
  )
}
export default TopBar;