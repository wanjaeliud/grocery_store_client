import './App.css';
import React from 'react';
import Navbar from './components/header/Navbar'
import Home from './components/home/Home';
import {Switch, Route} from 'react-router-dom';
// import Products from './components/products/Products';
import Product from './components/product/product';
import Blogs from './components/blogs/Blogs';
import Events from "./components/events/Events"


function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/blogs" component={Blogs}/>
          <Home/>
        </Switch>
      </>
  )
}


export default App;
