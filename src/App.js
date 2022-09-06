import './App.css';
import { productData } from './components/products/data';
import Navbar from './components/header/Navbar';
import Products from './components/products/index';

function App() {
  return (
    <div>
    <Products heading= "Fresh and healthy produce from our trusted farmers" data={productData}/>
    </div>
     
  );
}


export default App;
