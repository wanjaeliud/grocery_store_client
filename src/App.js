import './App.css';
import React from 'react';
import Navbar from './components/header/Navbar'
import Home from './components/home/Home';
import {Switch, Route} from 'react-router-dom';
// import Products from './components/products/Products';
import Product from './components/product/product';
import Blogs from './components/blogs/Blogs';
import Events from "./components/events/Events"
import { productData } from './components/products/data';
import Products from './components/products/Products';
import { useState } from 'react';



function App() {
  const [show,setShow]= useState(true)
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/blogs" component={Blogs}/>
          <Home/>
        </Switch>
      </>
  )

}


export default App;
