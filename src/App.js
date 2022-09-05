import './App.css';
import Navbar from './components/header/Navbar';
import Blogs from './components/blogs/Blogs';
// import Home from './components/home/Home';


function App() {
  return (
      <div className="App">
    <Navbar />
        <Blogs />
        {/* <Navbar/> */}
        {/* <Home/> */}
      </div>
  );
}

export default App;
