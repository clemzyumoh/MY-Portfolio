
import './App.css';
import Nav from './Nav';

import { Routes, Route} from "react-router-dom";
import Contact from "./components/NavBar/Contact";
import Home from "./components/NavBar/Home";
import Portfolio from "./components/NavBar/Portfolio";
import Resume from "./components/NavBar/Resume";
import Services from "./components/NavBar/Services";





function App() {
  return (
    <div className="App">
      <Nav/>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
