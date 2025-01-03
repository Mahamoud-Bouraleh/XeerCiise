import React from 'react';
import './GuerrierSomalie.css'; // Fichier CSS lié
import hawatako from './image/hawatako.jpg'; // Importez l'image correctement
import sayidMedabdillahi from './image/sayidMedabdillahi.jpg'; 
import Imaam_Ahmed_Gurey from './image/Imaam_Ahmed_Gurey.jpg'; 
import ajuraansultana from './image/ajuuraanSultana.jpg'; 

import Ali_kalageeye from './image/Ali_kalageeye.jpg'; 
import Mahamoud_harbi from './image/Mahamoud_Harbi.jpg'; 
import Sultanate_adal from './image/Sultanate_adal.jpg'; 

const GuerrierSomalie = () => {
  return (
    <div className="guerrier-somalie">
      <h1>Guerrier Somalie</h1>
      <p>Les guerriers de Somalie sont reconnus pour leur bravoure et leur résilience à travers l'histoire.</p>
      <p>Ici, vous pouvez explorer les histoires et les légendes des grands guerriers somaliens.</p>

      <div className="image-grid">
        <div className="image-card">
          <img src={Imaam_Ahmed_Gurey} alt="Hawo Tako" className="image" />
          <p className="image-description">Ahmed Gurey (1506-1543) fut un leader militaire et religieux somalien de l'Empire Adal.
             Il est célèbre pour avoir mené les Guerres Adal-Éthiopie, défiant l'Empire éthiopien avec le soutien des Ottomans.
              Son courage et son habileté stratégique ont fait de lui une figure incontournable de l'histoire de la Corne de l'Afrique.</p>
        </div>
        <div className="image-card">
          <img src={sayidMedabdillahi} alt="Sayid Mohammed" className="image" />
          <p className="image-description">Sayid Maxamed Cabdille Xasan (1856-1920) fut un leader religieux et militaire somalien, 
            fondateur des Daraawiish, un mouvement de résistance contre le colonialisme britannique, italien et éthiopien. Poète et
             orateur charismatique, il reste un héros national somalien pour son combat pour l'unité et l'indépendance de son peuple.</p>
        </div>
        <div className="image-card">
          <img src={hawatako} alt="Ahmed Gurey" className="image" />
          <p className="image-description">Hawo Tako (XXe siècle) est une icône de la lutte des femmes somaliennes pour l'indépendance. 
            Active contre la colonisation italienne, elle est célébrée comme un symbole de courage et d'émancipation féminine dans l'histoire
             de la Somalie.</p>
        </div>
        
        <div className="image-card">
          <img src={ajuraansultana } alt="Ajuraan sultana" className="image" />
          <p className="image-description">(somali : Saldanadii Ajuuraan ; arabe : سلطنة الأجورانية) ou tout simplement Ajuran1,
             est un État islamique somali ayant dirigé et développé, du XIIIe au XVIIe siècle, une importante partie
              de la Corne de l'Afrique  </p>
        </div>
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

export default GuerrierSomalie;
