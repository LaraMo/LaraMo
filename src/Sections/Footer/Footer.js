import React from 'react';
import fb from '../../images/fb.png';
import whiteFb from '../../images/whiteFb.png';
import whiteInsta from '../../images/whiteInsta.png';
import whiteLinked from '../../images/whiteLinked.png';
import insta from '../../images/insta.png';
import linked from '../../images/linked.png';
import IconsHover from './IconHovers';
import './footer.scss';

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <p className="footer-title">Contact Me</p>
      <div className="footer-iconContainer  wow bounceInUp">
        <IconsHover id={"linked"} hoverImg={whiteLinked} img={linked} alt={"linked"}/>
        <IconsHover id={"insta"} hoverImg={whiteInsta} img={insta} alt={"insta"}/>
        <IconsHover id={"fb"} hoverImg={whiteFb} img={fb} alt={"facebook"}/>
      </div>
      <p className="footer-creds">All right reserved to LaraMo.</p>
    </div>   
  );
}

