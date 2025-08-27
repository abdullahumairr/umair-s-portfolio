
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Technologies from "./pages/Technologies";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
