import Navbar from "./components/Navbar"
import Home from "./components/home/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import About from './components/about/About';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Service />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
