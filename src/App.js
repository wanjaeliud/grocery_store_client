import './App.css';
import { productData } from './components/products/data';
import Navbar from './components/header/Navbar';
import Products from './components/products/Products';
import { useState } from 'react';


function App() {
  const [show,setShow]= useState(true)
  return (
    <div>
    <Products heading= "Our Products" data={productData} setShow={setShow}/>
    {
      show ?<Products/>: "Cart"
    }
    </div>
     
  );
}

export default App;
