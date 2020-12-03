import React from 'react';
import me from '../../images/me.jpg'
import './aboutMe.scss';
import { Parallax, Background } from 'react-parallax';

export default function AboutMe(props) {
  //based on the current time, the user will be greated accordingly
  const generateMessage =() => {
    let hours =new Date().getHours();
    return hours < 12 ? "Good morning!": hours < 17 ? "Good afternoon!" : "Good evening!" 
  }
 
  return (

      <div className="aboutMeContainer">
        <div className="aboutMe-image">
        <img width="350px" height="350px" src={me}/>
        </div>
            
<Parallax
  strength={200}
  renderLayer={(percentage) => (
    <div>
    <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to right, pink, #019CAD)",
          left: "10%",
          top: "70%",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          width: percentage * 200,
          height: percentage * 200,
          zIndex: -1,
          opacity: 0.2,
          boxShadow: "10px 5px 5px lightgray",

        }}
      />

       <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to right, pink, #019CAD)",
          left: "15%",
          top: "50%",
          borderRadius: "50%",
          transform: "translate(50%,-50%)",
          width: percentage * 100,
          height: percentage * 100,
          zIndex: -1,
          opacity: 0.2,
          boxShadow: "10px 5px 5px lightgray",

        }}
      />

      <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to left, green, #019CAD)",
          left: "8%",
          top: "10%",
          borderRadius: "50%",
          transform: "translate(50%,-50%)",
          width: percentage * 50,
          height: percentage * 50,
          zIndex: -1,
          opacity: 0.2,
          boxShadow: "10px 5px 5px lightgray",

        }}
      />


       <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to right, green, #019CAD)",
          left: "58%",
          top: "20%",
          borderRadius: "50%",
          transform: "translate(50%,-50%)",
          width: percentage * 250,
          height: percentage * 250,
          zIndex: -1,
          opacity: 0.2,
          boxShadow: "10px 5px 5px lightgray",

        }}
      />

             <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to right, green, pink)",
          left: "38%",
          top: "11%",
          borderRadius: "50%",
          transform: "translate(50%,-50%)",
          width: percentage * 80,
          height: percentage * 80,
          zIndex: -1,
          opacity: 0.2,
          boxShadow: "10px 5px 5px lightgray",

        }}
      />
      <div className="aboutMe-textContainer">
        <p className="aboutMe-text-greetings">{generateMessage()}</p>
        <p className="aboutMe-text">Hi, my name is Lara Mo! I love coding, cooking, singing and COFFEE ☕!
          Some of my tools that I work with daily are <span>React.js</span> and <span>SASS</span> for front-end dev,
          and <span>Node.js</span>, <span>Postgres</span>, <span>AWS</span> for backend dev.
          I immigrated to Canada in 2012, and have been exploring a wide range of possebilities ever since. 
          Currently, I live in <span>Laval</span> and I am a second year student at <span>Concordia University</span>.
          I aspire to combine my passion to <span>design components</span> & <span>photography</span> to form something amazing that would change the world 🌎</p>
      </div>
    </div>
  )}
>
</Parallax>
        </div>        
  );
}

