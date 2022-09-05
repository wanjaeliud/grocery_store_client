import './App.css';
import Navbar from './components/header/Navbar';
import Events from "./components/events/Events"
import Home from "./components/home/Home"


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Events />
      </div>
  );
}

export default App;
