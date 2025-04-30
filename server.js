const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const positions = {};

app.post('/api/position', (req, res) => {
  const { id, lat, lon } = req.body;
  if (!id || !lat || !lon) {
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
