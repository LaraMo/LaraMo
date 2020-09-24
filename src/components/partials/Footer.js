import React from 'react';
import fb from '../../images/fb.svg';
import insta from '../../images/insta.svg';
import linked from '../../images/linked.svg';


export default function Footer(props) {
  return (
    <div className="footerContainer">
      <div>contact me to style this later</div>
      <div className="footer-iconContainer">
        <img id="fb" src={fb} alt="fb"/>
        <img id="insta" src={insta} alt="instagram"/>
        <img id="linked" src={linked} alt="linkedIn"/>
      </div>
    </div>   
  );
}

