import React from 'react'
import '../../App.css';
import watermelon from "../../images/watermelon.jpg"
import carrot from "../../images/carrot.jpg"
import spinach from "../../images/spinach.jpg"
import sugarcane from "../../images/sugarcane.jpg"
import tomato from "../../images/tomato.jpg"
import banana from "../../images/banana.jpg"


const Events = () => {
  return (
    <div className='event-section'>
       <h1 className='event_header'>Our Events  </h1>
       <div className='event-container'>
       <div className='event'>
        <img src={spinach} alt= "spinach"/>
          <h1>July <span>7<sup>th</sup></span></h1>
          <h3>Best Spinach Species</h3>
          <h3>Venue : Muranga County Market</h3>
          <div className='event-time'>
            <h2>Entry: <span>Ksh 300</span></h2>
          </div>
          <h4>Opening Time : 9am  <button>Book Event</button></h4>
         
      </div>
      <div className='event'>
      <img src={tomato} alt= "tomato"/>
         <h1>Aug <span>17<sup>th</sup></span></h1>
         <h3>World Tomato Day</h3>
         <h3>Venue : Naivasha ADC</h3>
        <div className='event-time'>
          <h2>Entry: <span>Free</span></h2>
        </div>
        <h4>Opening Time : 8am  <button>Book Event</button></h4>
        
      </div>
      <div className='event'>
      <img src={watermelon} alt= "watermelon"/>
          <h1>Nov <span>20<sup>th</sup></span></h1>
          <h3>  Watermelon Farming Best Practices</h3>
          <h3>Venue : Muhoroni Agrovet Grounds</h3>
          <div className='event-time'>
            <h2>Entry: <span>Ksh 200</span></h2>
          </div>
          <h4>Opening Time : 9am  <button>Book Event</button></h4>
      </div>
      <div className='event'>
      <img src={banana} alt= "banana"/>
          <h1>Sep <span>5<sup>th</sup></span></h1>
          <h3>Banana Value Addition</h3>
          <h3>Venue : Kisii Farmers Centre</h3>
          <div className='event-time'>
            <h2>Entry: <span>Ksh 500</span></h2>
    
          </div>
          <h4>Opening Time : 9am  <button>Book Event</button></h4>
      </div>
      
      <div className='event'>
      <img src={carrot} alt= "carrot"/>
          <h1>Dec <span>9<sup>th</sup></span></h1>
          <h3> Carrot For Vision</h3>
          <h3>Venue : Nyeri Farmers Sacco</h3>
          <div className='event-time'>
            <h2>Entry: <span>Ksh 200</span></h2>

          </div>
          <h4>Opening Time : 9am  <button>Book Event</button></h4>
      </div>
      <div className='event'>
      <img src={sugarcane} alt= "tomato"/>
         <h1>Aug <span>17<sup>th</sup></span></h1>
         <h3>Western Sugar Circuit</h3>
         <h3>Venue : Kakamega University</h3>
        <div className='event-time'>
          <h2>Entry: <span>Free</span></h2>
        </div>
        <h4>Opening Time : 8am  <button>Book Event</button></h4>
        
      </div>

       </div>
    </div>
  )
}

export default Events