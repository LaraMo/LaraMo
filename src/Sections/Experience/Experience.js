import React from 'react';
import './experience.scss';

export default function Experience() {
  const data = [
    {
      title : "Bombardier",
      position: "Full stack intern",
      image: "bombardier",
      desc: "Create software for various projects.",
      start: "October 2020",
      end: "Current",
      location: "https://www.bombardier.com/en/home.html"
    },
    {
      title : "Neptronic",
      position: "Full stack web developer",
      image: "neptronic",
      desc: "Implementing new web pages for the in-house business tools using React.js, C#, ASP.NET, and Microsoft SQL Server.",
      start: "June 2019",
      end: "September 2020",
      location:"https://www.neptronic.com/home.aspx"
    },
    {
      title : "Nespresso",
      position: "Sales representitives",
      image: "nespresso",
      desc: "Showcase and demonstrate the use of coffee machines and share coffee expertise through storytelling and coffee tastings.",
      start: "June 2018",
      end: "July 2019",
      location: "https://www.nespresso.com/ca/en"
    }
  ]
  
  return (
      <div className="experienceContainer">
        {data.map((x, i) => {
          {console.log(x)}
          return (
            <div onClick={() => window.location.href=x.location}className={`experience ${x.image}`}key={i}>
            <h2 className="experience-title">{x.title}</h2>
            <p>{x.position}</p>
            <h3>{x.start} → {x.end}</h3>
            <p>{x.desc}</p>
          </div>
  
          )
        }) }
      </div>

  );
}

