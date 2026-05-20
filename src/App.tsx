import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";


export default function App() {
  return (
    <div className="bg-[#0B0B0F] text-white font-poppins max-md:px-4">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Tools />
      <Footer />
    </div>
  );
}
