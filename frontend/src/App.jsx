import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-black">
        <Navbar />
        <Service />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
