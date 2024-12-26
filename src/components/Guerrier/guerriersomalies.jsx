import React from 'react';
import './GuerrierSomalie.css';

const GuerrierSomalie = () => {
  return (
    <div className="guerrier-somalie-container">
      <h1>Guerrier Somalie</h1>
      <p>Les guerriers de Somalie sont reconnus pour leur bravoure et leur résilience à travers l'histoire.</p>
      <p>Ici, vous pouvez explorer les histoires et les légendes des grands guerriers somaliens.</p>

      <div className="image-grid">
        <div className="image-card">
          <img src="../../sayidMedabdillahi.jpg" alt="Guerrier 1" className="image" />
          <p className="image-description">Un guerrier somalien connu pour son courage face à l'ennemi.</p>
        </div>

        <div className="image-card">
          <img src="image2.jpg" alt="Guerrier 2" className="image" />
          <p className="image-description">Un défenseur légendaire des terres somaliennes.</p>
        </div>

        <div className="image-card">
          <img src="image3.jpg" alt="Guerrier 3" className="image" />
          <p className="image-description">Un héros respecté pour sa stratégie et sa bravoure.</p>
        </div>
      </div>
    </div>
  );
};

export default GuerrierSomalie;
