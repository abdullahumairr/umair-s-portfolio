
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./components/Projects";
import Footer from "./pages/Footer";
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
