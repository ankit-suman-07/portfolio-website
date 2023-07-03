import React from "react";
import AboutMe from "../components/AboutMe";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from '@mui/icons-material/Download';
import "../styles/Home.css";
import Image from "../assets/profile.png";

function Home() {
  return (
    <>
    <div className="home">
      <div className="imageDiv-top" >
        <img src={Image} alt="Profile Photo" className="image" />
      </div>
      <div className="hero">
        <div className="greeting" >
            Hi! I'm <span>Ankit Suman</span> 
        </div>
        <div className="tagline" >
            A passionate Web Developer
        </div>
        <div className="description" >
        interested in learning more about how computers work, and I have been working on my own projects that combine coding and art. My current project is a fun little game where you play as a cat who can jump up walls. It’s done in HTML5, JavaScript, CSS3, and Python and runs in any browser you can access.
        </div>
        <div className="interact" >
          <button className="resume" >
            Resume <DownloadIcon />
          </button>
          <div className="socials" >
            <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/"><LinkedInIcon /></a>
            <a href="https://github.com/ankit-suman-07"><GithubIcon /></a>
            <a href="https://www.instagram.com/ankit__suman_/"><InstagramIcon /></a>
            <a href="url"><EmailIcon /></a>
          </div>
        </div>
        
      </div>
      
      <div className="imageDiv" >
        <img src={Image} alt="Profile Photo" className="image" />
      </div>

      
    </div>
    <AboutMe />
    </>
  );
}

export default Home;