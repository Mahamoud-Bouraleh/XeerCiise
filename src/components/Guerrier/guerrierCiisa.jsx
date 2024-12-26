import React from 'react';

import sayidMedabdillahi from './image/sayidMedabdillahi.jpg'; 
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
          <img src={sayidMedabdillahi} alt="Sayid Mohammed" className="image" />
          <p className="image-description">Sayid Maxamed Cabdille Xasan (1856-1920) fut un leader religieux et militaire somalien, 
            fondateur des Daraawiish, un mouvement de résistance contre le colonialisme britannique, italien et éthiopien. Poète et
             orateur charismatique, il reste un héros national somalien pour son combat pour l'unité et l'indépendance de son peuple.</p>
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
