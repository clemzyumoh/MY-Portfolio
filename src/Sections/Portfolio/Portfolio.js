import Footer from "../../Component/Footer";
import Works from "../Home/Works";
import React, { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  return (
    <div>
      <Works isVisible={false} />
      <Footer />
    </div>
  );
}

export default Portfolio;
