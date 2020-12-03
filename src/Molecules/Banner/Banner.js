import React from 'react';
import { Parallax, Background } from 'react-parallax';

export default function Banner({text}) {
  return (
     <Parallax
        bgImage="https://64.media.tumblr.com/cd34a1bb6047b54d36a8204998c772ff/tumblr_pul9fipFgY1wnjxxqo1_500.png"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '50%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
        )}
    >
        <p>{text}ddd</p>
    </Parallax> 
  );
}

