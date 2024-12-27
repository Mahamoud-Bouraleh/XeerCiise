import './App.css';
import sagesLogo from './tete.jpg'; 
import React, { useState } from "react";
import Acceuille from './components/Acceuille/Acceuille';
import Apropos from './components/Apropos/Apropos';
import Geosom from './components/Map/Map';
import Historique from './components/Histoire/Historique';
import Contact from './components/Contact/Contact';
import Reglement from './components/RegleP/Reglement';
import Guerrier from './components/Guerrier/Guerrier'; 


const App = () => {
  const [language, setLanguage] = useState("francais");
  const [currentPage, setCurrentPage] = useState('accueil');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Ajoutez ici des fonctions pour changer la langue si nécessaire
  };
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <img src={sagesLogo} alt="Logo" className="header-logo-left" />
        <div className="header-content">
          <h1>Xeer Somali-Ciise</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#accueil" onClick={() => handleNavigation('accueil')} className={currentPage === 'accueil' ? 'active' : ''}>ACCUEIL</a>
        <a href="#apropos" onClick={() => handleNavigation('apropos')} className={currentPage === 'apropos' ? 'active' : ''}>À propos</a>
        <a href="#Map" onClick={() => handleNavigation('Map')} className={currentPage === 'Map' ? 'active' : ''}>Map</a>
        <a href="#reglement" onClick={() => handleNavigation('reglement')} className={currentPage === 'reglement' ? 'active' : ''}>Règlement</a>
        <a href="#historique" onClick={() => handleNavigation('historique')} className={currentPage === 'historique' ? 'active' : ''}>Historique</a>
        <a href="#guerrier" onClick={() => handleNavigation('guerrier')} className={currentPage === 'guerrier' ? 'active' : ''}>Guerrier</a>
        <a href="#contact" onClick={() => handleNavigation('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
        

        <div className="language-select">
          <label htmlFor="language" className="language-label">
            Langue :
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="language-dropdown"
          >
            <option value="francais">Français</option>
            <option value="english">English</option>
            <option value="somali">Somali</option>
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <div className="app-main">
        <section className="main-content">
          {currentPage === 'accueil' && <Acceuille />}
          {currentPage === 'apropos' && <Apropos />}
          {currentPage === 'Map' && <Geosom />}
          {currentPage === 'historique' && <Historique />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'reglement' && <Reglement />}
          {currentPage === 'guerrier' && <Guerrier />} 
         
        </section>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-contact">
            <p><i className="icon-location"></i>Djibouti, balbala</p>
            <p><i className="icon-phone"></i> <a href="tel:+253 77153498">+253 77 15 34 98 </a></p>
            <p><i className="icon-email"></i> <a href="mailto:geosom@gmail.com">xeerciise@gmail.com</a></p>
          </div>
          <div className="footer-about">
            <h4>À propos</h4>
            <p>Interface ou les visiteurs peuvent consulter l'histoire de Somali, l'histoire de Issa
               , biographie des Ougaas et differents regles de Xeer Ciise </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
