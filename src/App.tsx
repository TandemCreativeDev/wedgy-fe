import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import Merch from "./pages/Merch";
import Tour from "./pages/Tour";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
