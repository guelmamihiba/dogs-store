const express = require('express');
const db = require("../database-mysql/index.js");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express server!');
});

app.get('/api/accessorie', (req, res) => {
  db.getAllAccessorie((err, accessories) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching accessories' });
    } else {
      res.json(accessories);
    }
  });
});

app.post('/api/accessorie', (req, res) => {
  const newAccessorieData = req.body;
  if (!newAccessorieData) {
    res.status(400).json({ error: 'Invalid accessorie data' });
  } else {
    db.addAccessorie(newAccessorieData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error adding accessorie' });
      } else {
        res.json({ message: 'accessorie added successfully', accessorieId: result.insertId });
      }
    });
  }
});

app.put('/api/accessorie/:id', (req, res) => {
  const accessorieId = req.params.id;
  const updatedAccessorieData = req.body;
  
  if (!updatedAccessorieData || Object.keys(updatedAccessorieData).length === 0) {
    res.status(400).json({ error: 'Invalid accessorie data' });
  } else {
    db.updateAccessorie(accessorieId, updatedAccessorieData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error updating accessorie' });
      } else {
        res.json({ message: 'accessorie updated successfully', accessorieId });
      }
    });
  }
});

app.delete('/api/accessorie/:id', (req, res) => {
  const accessorieId = req.params.id;
  
  db.deleteAccessorie(accessorieId, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting accessorie' });
    } else {
      res.json({ message: 'accessorie deleted successfully', accessorieId });
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
