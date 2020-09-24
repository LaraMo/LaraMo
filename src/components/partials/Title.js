import React from 'react';


export default function Title(props) {
  let {title, subTitle} = props;
  return (
      <div className="homePage-titleContainer">
        <p className="homePage-title">{title}</p>
        <p className="homePage-title-sub">{subTitle}</p>
      </div>
  );
}

