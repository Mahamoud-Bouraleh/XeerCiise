import React from "react";
import './Geosom.css'; // Importation du fichier CSS
import cartciise from './cartciise.jpg'; // Importer l'image depuis le même dossier

const Geosom = () => {
  return (
    <div className="geosom-container">
      <h2 className="geosom-title">Geosom</h2>
      <p className="geosom-description">
        Geosom est une initiative innovante qui vise à utiliser les technologies modernes pour 
        cartographier les ressources naturelles, infrastructures et opportunités économiques 
        au sein des territoires Ciise. Ce projet permet de renforcer la planification et 
        le développement communautaire.
      </p>
      <img src={cartciise} alt="Carte Ciise" className="geosom-image" />
    </div>
  );
};

export default Geosom;
