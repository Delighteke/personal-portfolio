// projectsPage.js
// Eke Delight
// 301325470
// Date: 03/03/2024

import React from 'react';
import cards from './cards.JPG';
import internetbanking from './internetbanking.jpg';
import atm from './atm.jpg';
import './styles.css'; // Import your CSS file

function ProjectPage() {
  return (
    <div>
      <h1>Projects</h1>

      <p> <b>Here you can find some of the projects I have worked on below </b></p>

      <div className="image-container">
        <img src={cards} alt="cards" />
        <p>In the past years I worked with the electronic bank Teams
           that deployed customized debit cards for schools that also functioned as their School IDs 1</p>
      </div>
      <div className="image-container">
        <img src={internetbanking} alt="internetbanking" />
        <p>I contributed in erp intergration deployment of internet banking to Educational Institutions</p>
      </div>
      <div className="image-container">
        <img src={atm} alt="atm" />
        <p> I played a key role in seting configuration for automated Teller machines</p>
        </div>
      {/* additional content */}
    </div>
  );
}

export default ProjectPage;