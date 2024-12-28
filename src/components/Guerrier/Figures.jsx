import React, { useState } from "react";
import './Figures.css';
import Ougaas from './Ogaas';
import GuerrierSomalie from './guerriersomalies';
import GuerrierCiisa from './guerrierCiisa';

const Guerrier = () => {
  const [selectedSection, setSelectedSection] = useState("ougaas"); // Par défaut Ougaas

  const renderContent = () => {
    switch (selectedSection) {
      case "somali":
        return <GuerrierSomalie />;
      case "ciisa":
        return <GuerrierCiisa />;
      case "ougaas":
        return <Ougaas />;
      default:
        return <Ougaas />; // Par défaut Ougaas
    }
  };

  return (
    <div className="guerrier-container">
      <div className="guerrier-buttons">
        <button
          className={selectedSection === "ougaas" ? "active" : ""}
          onClick={() => setSelectedSection("ougaas")}
        >
          Ougaas
        </button>
        <button
          className={selectedSection === "ciisa" ? "active" : ""}
          onClick={() => setSelectedSection("ciisa")}
        >
          Ciise
        </button>
        <button
          className={selectedSection === "somali" ? "active" : ""}
          onClick={() => setSelectedSection("somali")}
        >
          Somali
        </button>
      </div>
      <div className="guerrier-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Guerrier;
