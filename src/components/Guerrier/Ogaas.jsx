import React from 'react';
import ugaasMoustapha from './image/OugaasMoustapha.webp'; 
import ugaasHassan from './image/Ougaas_Hassan.jpg'; 
import Waiss_Robleh from './image/WaissRobleh.png'; 

const Ogaas = () => {
  return (
    <div>
      <h1>Ogaas</h1>
      <p>L'Ogaas est une figure clé dans la société somalienne, jouant un rôle de guide et de chef dans la communauté.</p>
      <p>Découvrez les responsabilités et l'importance de l'Ogaas dans le système traditionnel.</p>

      <div className="image-grid">
        <div className="image-card">
          <img src={ugaasMoustapha } alt="Ougaas Moustapha" className="image" />
          <p className="image-description">Ugaas Moustapha Mohamed Omar, est un leader traditionnel 
            de l'ethnie Issa en Somalie, intronisé en 2010. Son ascension a été controversée en raison d'allégations 
            de manipulation par le gouvernement d'Ismael Omar Guelleh. En tant qu'Ugaas, il est chargé de préserver 
            les traditions et de médiatiser les conflits au sein de sa communauté.</p>
        </div>
        <div className="image-card">
        <img src={ugaasHassan} alt="Ougaas Hassan" className="image" />
          <p className="image-description"> Ougaas Xasan Xirsi Rooble est né en 1930 et est décédé en 1994. Son couronnement en tant qu'Ougaas 
            a eu lieu en 1994, devenant ainsi l'Ugaas de la communauté Ciise. Ugaas Xasan Xirsi était connu pour son rôle de leader et
             son engagement dans les affaires sociales et culturelles de la communauté Ciise. </p>
        </div>
        <div className="image-card">
        <img src={Waiss_Robleh} alt="Waiss Robleh" className="image" />
          <p className="image-description">Waiss Robleh était l'un des Ougaas de communauté Issa, ayant exercé ses fonctions 
            jusqu'à sa mort en 1928. Il est le 17e Ougaas de cette communauté, succédant à Guuleed Rooble et précédant Xasan 
            Xirsi Rooble, qui a été intronisé en 1930. Wacays Rooble a joué un rôle important dans la préservation des
             traditions et des affaires sociales de la Beesha Ciise durant son mandat.   </p>
        </div>
      </div>

    </div>
  );
};

export default Ogaas;
