import React, { useState } from "react";
import './Guerrier.css';
import Ougaas from './Ogaas';
import GuerrierSomalie from './guerriersomalies';
import GuerrierCiisa from './guerrierCiisa';

const Guerrier = () => {
  const [selectedSection, setSelectedSection] = useState("somali");

  const renderContent = () => {
    switch (selectedSection) {
      case "somali":
        return <GuerrierSomalie />;
      case "ciisa":
        return <GuerrierCiisa />;
      case "ougaas":
        return <Ougaas />;
      default:
        return <GuerrierSomalie />; // Par défaut GuerrierSomalie
    }
  };

  return (
    <div className="guerrier-container">
      <div className="guerrier-buttons">
        <button
          className={selectedSection === "somali" ? "active" : ""}
          onClick={() => setSelectedSection("somali")}
        >
          Guerrier Somali
        </button>
        <button
          className={selectedSection === "ciisa" ? "active" : ""}
          onClick={() => setSelectedSection("ciisa")}
        >
          Guerrier Ciise
        </button>
        <button
          className={selectedSection === "ougaas" ? "active" : ""}
          onClick={() => setSelectedSection("ougaas")}
        >
          Ougaas
        </button>
      </div>
      <div className="guerrier-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Guerrier;
