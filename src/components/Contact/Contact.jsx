import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Votre message a été envoyé avec succès !");
        setSuccess(true);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(result.error || "Erreur lors de l'envoi du message.");
        setSuccess(false);
      }
    } catch (error) {
      setResponseMessage("Erreur de connexion au serveur.");
      setSuccess(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Nous sommes ici pour vous aider avec vos besoins Xeer Ciise</h1>
      <p>Laissez votre message, nous vous répondrons rapidement.</p>
      {responseMessage && (
        <p className={`response-message ${success ? "success" : "error"}`}>
          {responseMessage}
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+253 77 15 34 98"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Écrivez votre message ici (max 1000 caractères)"
            value={formData.message}
            onChange={handleChange}
            maxLength={1000}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
