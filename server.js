const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const positions = {};

app.post('/api/position', (req, res) => {
  const { id, latitude, longitude } = req.body;
  if (!id || !latitude || !longitude) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  positions[id] = { ...req.body };
  res.json({ message: 'Position enregistrée' });
});

app.get('/api/positions', (req, res) => {
  res.json(positions);
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
