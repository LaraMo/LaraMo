import React from 'react';
import Title from "./partials/Title";
import Footer from "./partials/Footer";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage-intro">
        <Title title="Lara Mo." subTitle={<p><u>I</u> always <u>scream</u> for ideas 🍨</p>}/>
      </div>
      hi this is some contect
      <Footer/>
    </div>
  );
}

