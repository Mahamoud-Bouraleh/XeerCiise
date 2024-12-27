import React from "react";

const Map = () => {
  return (
    <div>
      <h2>Bienvenue sur la Carte</h2>
      <iframe
        src="/carte-ciise/Carte.html" // Chemin relatif dans le dossier public
        title="Carte du système Xeer Ciise"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Map;
