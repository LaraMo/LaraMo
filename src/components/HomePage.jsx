import React from 'react';
import Welcome from "../Sections/Welcome/Welcome";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Education from "../Sections/Education/Education";
import Footer from "../Sections/Footer/Footer";
import { ProgressBar } from 'scrolling-based-progressbar';
import '../styles/home.scss';
import Experience from '../Sections/Experience/Experience';

export default function HomePage() {
  return (
   <div>
     <ProgressBar hight="5px" color="#1976d2"/>
    <Welcome/>
    <div className="homePageContainer">
    <AboutMe/>
    <div className="homePage-bar">
      <h2>| ¯\_ʕ•́ᴥ•̀ʔ_/¯ |</h2>
      <h1>Experience</h1>
    </div>
    <Experience/>
    <div className="homePage-bar">
      <h2>| ¯\_ʕ•́ᴥ•̀ʔ_/¯ |</h2>
      <h1>Education</h1>
    </div>
    <Education/>
    </div>
    <Footer/>
  </div>


  );
}

