import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Change from './components/Change';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Change/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;