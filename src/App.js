import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Process from './Component/Process';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';
import Services from './Component/Services';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Process />
      <About />
      <Portfolio />
      <Skills />
      <Services />
    </div>
  );
}

export default App;
