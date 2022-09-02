import './App.css';
import Navbar from './components/header/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/products/Products';
import Reviews from './components/reviews/Reviews';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <Products/> } />
          <Route path="contact" element={ <Reviews/> } />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </div>
  );
}

export default App;
