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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, <br/>
            remaining essentially unchanged.
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