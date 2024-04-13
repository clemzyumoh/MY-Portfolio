// import styled from "styled-components";
import React from "react";
import Footer from "../../Component/Footer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./HeroSec";
import Skills from "./Skills";
import Works from "./Works";




function Home(){
    return(
        <div>
            <Hero/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default Home;