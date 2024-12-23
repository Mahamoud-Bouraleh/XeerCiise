
import './App.css';
import sagesLogo from './sages.jpg'; 
import React, { useState } from "react";
import Acceuille from './components/Acceuille/Acceuille';
import Apropos from './components/Apropos/Apropos';
import Geosom from './components/Geosom/Geosom';
import Historique from './components/Histoire/Historique';
import Contact from './components/Contact/Contact';





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
  
    <div className="app-container"  >
      {/* Header Section */}
      <header className="app-header">
      <img src={sagesLogo} alt="Logo" className="header-logo" />
     <h1>Xeer Ciise</h1>
  
           </header> 

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#accueil" onClick={() => handleNavigation('accueil')} className={currentPage === 'accueil' ? 'active' : ''}>ACCUEIL</a>
        <a href="#apropos" onClick={() => handleNavigation('apropos')} className={currentPage === 'apropos' ? 'active' : ''}>À propos</a>
        <a href="#geosom" onClick={() => handleNavigation('geosom')} className={currentPage === 'geosom' ? 'active' : ''}>Geosom</a>
        <a href="#historique" onClick={() => handleNavigation('historique')} className={currentPage === 'historique' ? 'active' : ''}>Historique</a>
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
        <div>
        <aside className="sidebar-menu">
          <h3>MENU</h3>
          <ul>
         
            <li><a href="#accueil" onClick={() => handleNavigation('accueil')} className={currentPage === 'accueil' ? 'active' : ''}>ACCUEIL</a></li>
            <li><a href="#apropos" onClick={() => handleNavigation('apropos')} className={currentPage === 'apropos' ? 'active' : ''}>À propos</a></li>
            <li><a href="#geosom" onClick={() => handleNavigation('geosom')} className={currentPage === 'geosom' ? 'active' : ''}>Geosom</a></li>
            <li><a href="#historique" onClick={() => handleNavigation('historique')} className={currentPage === 'historique' ? 'active' : ''}>Historique</a></li>
            <li> <a href="#contact" onClick={() => handleNavigation('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
          
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
  {currentPage === 'accueil' && <Acceuille />}
  {currentPage === 'apropos' && <Apropos />}
  {currentPage === 'geosom' && <Geosom />}
  {currentPage === 'historique' && <Historique />}
  {currentPage === 'contact' && <Contact />}
</section>

      </div>
    </div>
  );
};

export default App;
