
import React from 'react';
import { SayButton } from 'react-say';
import {Volume2} from 'react-feather';
import './welcome.scss';

export default function Title() {
  return (
       <div className="welcomeContainer">
       <div class="welcome-title"> 
       <SayButton className="welcome-listen" speak="Welcome to Lara Mo's world!">
            <Volume2/>
        </SayButton>
        <p>Lara Mo</p>
        </div>
        <div class="welcome-title-sub">(English/French: [ˈl-ah-ruh']; Russian: [ˈЛара']; Hebrew: [ˈלרה']; )</div>
      </div>  
  );
}

