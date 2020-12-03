import React from 'react';
import con from '../../images/concordia.png';
import dawson from '../../images/dawson.png';
import "./education.scss";


export default function Education(props) {
  return (
    <div className="educationContainer">
      <div className="education">
            <img width ="65px" height="auto" src={con}/>
            <p className="education-title">Concordia University</p>
            <p>Class of 2022</p>
            <p>this is about blah ablha blah blah</p>
        </div>

        <div className="education">
            <img width ="100px" height="auto" src={dawson}/>
            <p className="education-title">Dawson College</p>
            <p>Class of 2019</p>
            <p>DEC in Computer science and technologies</p>
        </div>
          {/* <img width ="250px" height="100px" src={con}/>
            <div>
            <p className="education-title">Concordia university</p>
            <p>this is about blah ablha blah blah</p>
            <p className="education-classOf"></p>
            </div>
        </div>

        <div className="education-card">
          <img width ="250px" height="100px" src={dawson}/>
            <div>
            <p className="education-title">Dawson College</p>
            <p>this is about blah ablha blah blah</p>
            <p className="education-classOf">Class of 2016</p>
            </div>
        </div>
      </div> */}
    </div>   
  );
}

