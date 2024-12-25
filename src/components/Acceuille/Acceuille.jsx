import React from "react";
import './Acceuille.css'; // Importation du fichier CSS

const Acceuille = () => {
  return (
    <div className="acceuille-container">
      {/* Bandeau supérieur */}
      <header className="acceuille-header">
        <h1>Bienvenu sur xeer ciise</h1>
        <p>Ciise Waa Ciise Nin na Nin Caaro Ma dheero</p>
      </header>

      {/* Bande promotionnelle */}
      <div className="acceuille-banner">
        <p>Découvrez le système traditionnel de gouvernance Xeer Ciise.</p>
      </div>

      {/* Section descriptive */}
      <section className="acceuille-description">
        <p>
          Le Xeer Ciise est un système de gouvernance coutumier pratiqué par les communautés ciises. 
          Il repose sur des règles communautaires qui favorisent la paix, la justice et la coopération 
          entre les membres. Ce système, transmis de génération en génération, incarne les valeurs 
          de solidarité et de respect mutuel, tout en préservant les traditions ancestrales.
        </p>
      </section>

      {/* Section des drapeaux */}
      <section className="acceuille-flags">
        <div className="flag-item">
          <img src={require('../../Djibouti.png')} alt="Drapeau 1" className="flag-image" />
          <p>Le drapeau 1 représente l'unité et la solidarité des communautés Ciises.</p>
        </div>
        <div className="flag-item">
          <img src={require('../../Somalie.png')} alt="Drapeau 2" className="flag-image" />
          <p>Le drapeau 2 symbolise la paix et la justice dans le Xeer Ciise.</p>
        </div>
        <div className="flag-item">
          <img src={require('../../Ethiopie.png')} alt="Drapeau 3" className="flag-image" />
          <p>Le drapeau 3 incarne les traditions et la résilience des peuples Ciises.</p>
        </div>
      </section>
    </div>
  );
};

export default Acceuille;
