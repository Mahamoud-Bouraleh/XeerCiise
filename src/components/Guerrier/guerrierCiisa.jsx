import React from 'react';

import Ali_kalageeye from './image/Ali_kalageeye.jpg'; 
import Mahamoud_harbi from './image/Mahamoud_Harbi.jpg'; 
import Sultanate_adal from './image/Sultanate_adal.jpg'; 

const GuerrierCiisa = () => {
  return (
    <div>
      <h1>Guerrier Ciise</h1>
      <p>Les guerriers Ciise représentent un héritage de force et d'unité parmi le peuple Ciise.</p>
      <p>Apprenez-en davantage sur leurs exploits et leur rôle dans la protection des traditions et du territoire.</p>

      <div className="image-grid">
        <div className="image-card">
          <img src={ Mahamoud_harbi} alt="Mahamoud Harbi" className="image" />
          <p className="image-description">Mahamoud Harbi Farah (1921-1960), né à Ali Sabieh, était un leader djiboutien engagé 
            dans la lutte pour l'indépendance et l'unification des Somaliens. Vice-président du gouvernement local sous 
            la colonisation française, il a milité pour que Djibouti rejoigne une Grande Somalie. Il est décédé en 1960 dans un 
            accident d'avion, laissant un héritage de nationalisme et de lutte pour la liberté.</p>
        </div>
        <div className="image-card">
          <img src={Ali_kalageeye} alt="Ali Kalageeye" className="image" />
          <p className="image-description"> Cali Kalageeye est une figure légendaire du folklore somalien,
             associée au XIXe siècle. Il est célèbre pour sa lutte contre le tyran Aale Boore, utilisant son 
             intelligence et sa ruse pour libérer son peuple de l'oppression. Son histoire, transmise oralement 
             parmi le clan Issa, symbolise la résistance et la justice dans la culture somalienne. </p>
        </div>
        <div className="image-card">
          <img src={Sultanate_adal} alt="Sultanate Adal" className="image" />
          <p className="image-description"> Le Sultanat d'Adal, un État musulman de la Corne de l'Afrique, a existé de 1415 à 1577.
             Fondé sur les ruines du Sultanat d'Ifat, il a prospéré sous Sabr ad-Din III et est connu pour ses guerres contre l'Éthiopie, 
             notamment sous Ahmad ibn Ibrahim al-Ghazi. Son déclin a commencé au 16ème siècle en raison de conflits internes et d'invasions 
             oromos, menant à sa dislocation au 17ème siècle.  </p>
        </div>
      </div>

    </div>
  );
};

export default GuerrierCiisa;
