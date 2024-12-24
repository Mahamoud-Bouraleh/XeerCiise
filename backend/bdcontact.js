const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route pour ajouter un contact
app.post('/api/contact', (req, res) => {
  const { nom, prenom, email, phone, message } = req.body;

  if (!nom || !prenom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis.' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Le message ne doit pas dépasser 1000 caractères.' });
  }

  const query = `INSERT INTO contact (nom, prenom, email, phone, message) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [nom, prenom, email, phone, message], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion dans la base de données :', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }
    res.status(201).json({ message: 'Contact ajouté avec succès !' });
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
