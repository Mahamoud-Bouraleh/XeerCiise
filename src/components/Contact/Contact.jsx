import React from "react";
import './Contact.css'; // Remplacez "Acceuille" par le nom du composant



const Contact = () => {
  return (
    <div>
      <h2>Contactez-Nous</h2>
      <p>Pour toute question ou information supplémentaire, vous pouvez nous joindre via les moyens suivants :</p>
      <ul>
        <li><strong>Téléphone :</strong> +253 77 15 34 98</li>
        <li><strong>Fax :</strong> +253 21 36 92 56</li>
        <li><strong>Email :</strong> <a href="mailto:geosom@gmail.com">geosom@gmail.com</a></li>
      </ul>
    </div>
  );
};

export default Contact;