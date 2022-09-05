import './App.css';
import { productData } from './components/products/data';
import Navbar from './components/header/Navbar';
import Events from "./components/events/Events"
import Home from "./components/home/Home"
import Products from './components/products/Products';
import Blogs from './components/blogs/Blogs';
// import Home from './components/home/Home';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Products heading= "Fresh and healthy produce from our trusted farmers" data={productData}/>
        <Events />
        <Blogs />
      </div>)
}


export default App;
