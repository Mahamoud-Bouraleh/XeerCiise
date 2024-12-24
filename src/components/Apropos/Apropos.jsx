// Apropos.jsx
import React from "react";
import './Apropos.css';

const Apropos = () => {
  return (
    <div className="apropos-container">
      <h2 className="apropos-title">À Propos de Xeer Ciise</h2>
      <p className="apropos-description">
        Xeer Ciise est une initiative visant à préserver, partager et valoriser les pratiques coutumières,
        l'histoire et les règles du peuple Ciise. Notre application offre une plateforme digitale permettant 
        de découvrir les valeurs traditionnelles et les principes qui structurent la vie sociale des communautés Ciise.
      </p>

      <h3 className="apropos-subtitle">Pourquoi Xeer Ciise ?</h3>
      <p className="apropos-description">
        Dans un monde en constante évolution, il est essentiel de documenter et transmettre notre patrimoine culturel. 
        Xeer Ciise permet :
      </p>
      <ul className="apropos-list">
        <li>De fournir un accès rapide à l'histoire riche et aux traditions des Ciise.</li>
        <li>De renforcer l'identité communautaire en connectant les générations à travers des récits et des enseignements.</li>
        <li>De promouvoir les règles du Xeer pour résoudre les conflits et maintenir l'harmonie sociale.</li>
      </ul>

      <h3 className="apropos-subtitle">Fonctionnalités Principales</h3>
      <ul className="apropos-list">
        <li><strong>Historique :</strong> Découvrez les origines, l'évolution et les événements marquants du peuple Ciise.</li>
        <li><strong>Règles du Xeer :</strong> Accédez aux lois coutumières qui régissent les interactions sociales et les décisions communautaires.</li>
        <li><strong>Cartographie :</strong> Explorez les territoires traditionnels des Ciise avec notre outil Geosom.</li>
        <li><strong>Ressources éducatives :</strong> Apprenez à travers des articles, des vidéos et des récits authentiques.</li>
      </ul>

      <h3 className="apropos-subtitle">L'Utilité de Notre Application</h3>
      <p className="apropos-description">
        Xeer Ciise est une ressource précieuse pour :
      </p>
      <ul className="apropos-list">
        <li>Les jeunes générations souhaitant en savoir plus sur leurs racines culturelles.</li>
        <li>Les chercheurs et historiens intéressés par les pratiques sociales africaines.</li>
        <li>Les membres de la communauté cherchant des outils pour renforcer leur identité collective.</li>
        <li>Les décideurs souhaitant s'inspirer des mécanismes traditionnels pour promouvoir la paix et la justice.</li>
      </ul>

      <p className="apropos-conclusion">
        Avec Xeer Ciise, nous construisons un pont entre le passé et le futur, pour que la richesse de nos coutumes 
        continue de briller dans le monde moderne.
      </p>
    </div>
  );
};

export default Apropos;
