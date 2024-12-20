import React, { useState } from "react";
import "./App.css";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import sages from "./sages.jpg"; // Importation de l'image

const App = () => {
  const [language, setLanguage] = useState("fr");

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
          <span>Xeer Ciise Somali</span>
        </div>
        <nav className="nav-links">
          <a href="#services" className="active">
            Acceuille
          </a>
          <a href="#hire-developers">A propos</a>
          <a href="#careers">Reglement et preference</a>
          <a href="#case-study">Historique</a>
          <a href="#company">Contact</a>
        </nav>
        <select
          className="language-selector"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="so">Somali</option>
        </select>
      </header>

      <main>
        <section className="info-section">
          <div className="info-content">
            <img src={sages} alt="Sages" className="icon" /> {/* Image incluse ici */}
            <div className="info-text">
              <p>
                Grâce aux informations centralisées et aux analyses générées
                par la plateforme, les dirigeants peuvent prendre des décisions
                éclairées pour optimiser la gestion de leur entreprise.
              </p>
              <p>
                Le tableau de bord est conçu pour être simple à utiliser, avec
                une présentation claire des informations essentielles,
                facilitant la navigation et l'interprétation des données.
              </p>
            </div>
            <div className="buttons">
              <button className="green-button">Histoire reer isse</button>
              <button className="green-button">Xeex cisse-Somali</button>
              <button className="green-button">Histoires Océan</button>
              <button className="green-button">Histoire l'est Africa</button>
            </div>
          </div>
        </section>

        <section className="map-section">
          <img
            src="/path/to/africa-map.png"
            alt="Carte Afrique"
            className="map-image"
          />
          <h3>Géolocalisation du map reer isse - Somali</h3>
          <div className="legend">
            <h4>Légende</h4>
            <ul>
              <li>Pays représentés</li>
              <li>Couleurs des secteurs</li>
              <li>Informations spécifiques</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h4>Contact</h4>
            <p>
              <FaPhone /> +253 77 123 456
            </p>
            <p>
              <FaEnvelope /> contact@xeerciise.com
            </p>
          </div>
          <div className="social-media">
            <h4>Suivez-nous</h4>
            <div className="icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Xeer Ciise Somali. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
