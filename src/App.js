import logo from './logo.svg';
import './App.css';


import HomeSection from './home.js';
import AboutUs from './about';
import Events from './events';
import Donate from './donate';

function App() {
  return (
    <>
      <HomeSection />
      <AboutUs />
      <Events />
      <Donate />
    </>
  );
}

export default App;
