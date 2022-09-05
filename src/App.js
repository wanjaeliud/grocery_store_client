import './App.css';
import Navbar from './components/header/Navbar';
import Events from "./components/events/Events"




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
