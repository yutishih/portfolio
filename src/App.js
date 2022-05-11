import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Process from './Component/Process';
import About from './Component/About';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Process />
      <About />
    </div>
  );
}

export default App;
