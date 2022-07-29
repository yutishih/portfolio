import Navigation from './Component/Navigation';
import MobileMenu from './Component/MobileMenu';
import Home from './Component/Home';
import Process from './Component/Process';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Partners from './Component/Partners';
import News from './Component/News';
import Subscribe from './Component/Subscribe';
import Contact from './Component/Contact';
import CopyRight from './Component/CopyRight';
import MouseCursor from './Component/MouseCursor';
import ProgressBar from './Component/ProgressBar';


function App() {

  return (
    <div className="App all-wrap">
      <Navigation />
      <MobileMenu />
      <Home />
      <Process />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Testimonials />
      {/* <Partners /> */}
      <News />
      <Subscribe />
      <Contact />
      <CopyRight />
      <MouseCursor />
      <ProgressBar />
    </div>
  );
}

export default App;
