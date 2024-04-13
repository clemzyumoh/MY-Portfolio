
import './App.css';
import Nav from './Component/NavBar/Nav';

import { Routes, Route} from "react-router-dom";
import Contact from "./Sections/Contact/Contact";
import Home from "./Sections/Home/Home";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Resume from "./Sections/Resume/Resume";
import Services from "./Sections/Services/Services";





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
