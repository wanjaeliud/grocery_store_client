import './App.css';
import { productData } from './components/products/data';
import Navbar from './components/header/Navbar';
import Products from './components/products/Product';


function App() {
  return (
    <div>
    <Products heading= "Favourite product" data={productData}/>
    </div>
     
  );
}

export default App;
