import React from "react";

const Map = () => {
  return (
    <div>
      <h2>la Carte de Ciisa</h2>
      <iframe
        src="/Carte-ciise/carte.html" // Chemin correct vers le fichier HTML dans le dossier public
        title="Carte du système Xeer Ciise"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Map;
