const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Ajusta esto a tu dominio de frontend
  credentials: true
}));
app.use(bodyParser.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Rutas
app.post('/api/register', (req, res) => {
  // Manejo de la solicitud de registro
  res.send({ message: 'User registered successfully', success: true });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
