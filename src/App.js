import React from "react";
import './App.css';
import sagesLogo from './sages.jpg'; 

const App = () => {
  return (
    <div className="app-container"  >
      {/* Header Section */}
      <header className="app-header">
      <img src={sagesLogo} alt="Logo" className="header-logo" />
     <h1>Xeer Ciise</h1>
           </header> 

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#accueil" className="active">ACCUEIL</a>
        <a href="#consulat">A propos</a>
        <a href="#avis">reglement et preference</a>
        <a href="#services">Geosom</a>
        <a href="#services">Historique </a>
        <a href="#visas">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="app-main">
        <div>
        <aside className="sidebar-menu">
          <h3>MENU</h3>
          <ul>
            <li><a href="#accueil">ACCUEIL</a></li>
            <li><a href="#consulat">A propos</a></li>
            <li><a href="#service-economique">Reglement et preference</a></li>
            <li> <a href="#services">Geosom</a></li>
            <li><a href="#gestion-consulaire"> Historique</a></li>
            <li><a href="#etat-civil">Contact</a></li>
          
          </ul>
          
        </aside>
         {/* Contact Bar */}
      <div className="contact-bar">
        <h4> CONTACTER NOUS</h4>
      
        <p>Téléphone: +253 77 15 34 98</p>
        <p>Fax: +253 21 36 92 56</p>
        <p>Mails: <a href="mailto:contact@xeerciise.com">geosom@gmail.com</a></p>
      </div></div>

        <section className="main-content">
          <h2>Reglement REER CISSE - SOMALI </h2>
          <p>
          Le xeer ciise fait référence au droit coutumier oral des communautés somali-Issa d’Éthiopie,
           de Djibouti et de Somalie. Système de gouvernance démocratique très structuré et rigoureusement codifié, 
           il comporte trois composantes principales : (a) une constitution politique, 
           qui définit la répartition du pouvoir et les processus de prise de décision ;
            (b) un code pénal, qui établit une justice au sein de la communauté, axée sur la réconciliation et la compensation ; et 
            (c) un code de conduite sociale, qui définit une série de principes et de valeurs métaphysiques, 
          spirituelles et sociales pour réguler les comportements collectifs et individuels.
          </p>
          

        </section>
      </div>
    </div>
  );
};

export default App;
