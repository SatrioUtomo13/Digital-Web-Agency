import Navbar from "./components/Navbar"
import Home from "./components/home/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Service />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
