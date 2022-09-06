import React from 'react';
import './bar.css';

function Bar(){
  return (
      <>
      
    <div className='bar'>
    <div className='header'>
        <img
        className='headerImg'
        src='https://www.greenlife.co.ke/wp-content/uploads/2020/02/Cabbage-2000x1000.jpg'
        alt=''
        />
    </div>
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT SMART FARMERS</span>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR43DxAcZUunErfmEKTJDFNXUSFEb4XRMIk_xOrN8EhGZsT2CCX3sD2iiCrrJm7uYKXyg&usqp=CAU'
            alt=''
            />
            <br/>
            <p>
            At Smar Farmers, we believe there is a better way to do marketing. 
            A more valuable, less invasive way where customers are earned
            rather than bought. We're obsessively passionate about it,
            and our mission is to help people acheive it.
            </p>
        </div>
        
        <div className='sidebarItem'>
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Organic</li>
            <li className='sidebarListItem'>LifeStyle</li>
            <li className='sidebarListItem'>Market</li>
            <li className='sidebarListItem'>News</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Innovate</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className='sidebarSocial'>
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
    </div>
    </div>
    </>
    
  )
}
export default Bar;