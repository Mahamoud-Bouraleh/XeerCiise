import React from 'react';
import './Reglement.css'; // Vous pouvez créer ce fichier pour styliser la page

const Reglement = () => {
  return (
    <div className="reglement-container">
      <h2>Règlement</h2>
      <p>
        Le Xeer Ciise repose sur des règles coutumières et des accords communautaires visant à maintenir l'ordre et l'harmonie.
        Voici les principaux points :
      </p>
      <ul>
        <li><strong>Respect des aînés :</strong> Les décisions sont prises sous leur supervision.</li>
        <li><strong>Résolution des conflits :</strong> Priorité à des solutions pacifiques basées sur le consensus.</li>
        <li><strong>Solidarité communautaire :</strong> Chaque membre contribue à la justice et à l'entraide.</li>
        <li><strong>Protection des droits :</strong> Garantir la sécurité et l'équité pour tous.</li>
      </ul>
      <p>
        Ces principes permettent de préserver les valeurs traditionnelles tout en favorisant l'unité et la cohésion.
      </p>
    </div>
  );
};

export default Reglement;
