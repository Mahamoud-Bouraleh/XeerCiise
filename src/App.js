import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1>Xeer Ciise</h1>
      </header>

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#accueil" className="active">ACCUEIL</a>
        <a href="#consulat">A propos</a>
        <a href="#avis">reglement et preference</a>
        <a href="#services">Historique</a>
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
            <li><a href="#gestion-consulaire"> Historique</a></li>
            <li><a href="#etat-civil">Contact</a></li>
          
          </ul>
          
        </aside>
         {/* Contact Bar */}
      <div className="contact-bar">
        <h4>NOUS CONTACTER</h4>
        <p><strong>Consulat Général d'Algérie à Paris</strong></p>
        <p>1, Passage du Trône<br />75011 Paris</p>
        <p>Téléphone: +33 1 53 72 07 00</p>
        <p>Fax: +33 1 53 72 07 14</p>
        <p>Mails: <a href="mailto:contact@xeerciise.com">contact@xeerciise.com</a></p>
      </div></div>

        <section className="main-content">
          <h2>Votre Carte d’Identité Nationale Biométrique est-elle prête?</h2>
          <p>
            La carte nationale d’identité biométrique est établie en Algérie. Les
            intéressés sont invités à vérifier sur le site du Consulat si celle-ci est
            disponible, avant de se présenter pour le retrait.
          </p>
          <p>
            Pour vérifier la disponibilité de votre carte nationale d’identité biométrique,
            veuillez introduire <strong>le Numéro d’Identification National « NIN »</strong>.
          </p>
          <p>
            <strong>
              À noter que le Numéro d’Identification National « NIN » est également porté
              sur votre passeport biométrique.
            </strong>
          </p>
          <img
            src="/path-to-example-card.png"
            alt="Exemple de Carte"
            className="example-card"
          />
        </section>
      </div>
    </div>
  );
};

export default App;
