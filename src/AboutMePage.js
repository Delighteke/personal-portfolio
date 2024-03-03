// AboutMePage.js
import React from 'react';
import PassportImage from './Passport.jpg'; // Import your about image
import './styles.css'
import resumePDF from './resume.pdf'; // Import the PDF file

function AboutMePage() {
  return (
    <div className= "about-container">
      <h2>About Me</h2>
      <img src={PassportImage} alt="Passport" className="small-image"/>
      <a href={resumePDF} target="_blank">Download Delight's Resume (PDF)</a>

     <p><b>Full name : Delight Ikechukwu Eke</b></p>

      <p className= "about-text"> Delight Eke is a result-oriented Computer scientist and electronic banking 
      business development manager with overseven years’ experience in the financial 
      and technology Industry. I am passionate about adding extra value to every single job 
      I am involved in. In the course of my work experience I have achieved groundbreaking 
      milestones in different teams. This ranges from birthing new product ideas, recommendation 
      of product improvement,research/development, market intelligence/analysis and surpassing 
      assigned targets. My skills and experience also includes expertise in other areas such as customer 
      service, relationship management, data analysis andgraphic designs. </p>

      {/* add more information here  */}
    </div>
  );
}

export default AboutMePage;
