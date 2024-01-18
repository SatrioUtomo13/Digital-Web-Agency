import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Navbar/>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
