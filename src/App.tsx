import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Change from './components/Change';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Publications from './components/Publications';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Change/> */}
      <Work/>
      <Projects/>
      <Publications/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;