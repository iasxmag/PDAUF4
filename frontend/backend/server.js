const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta usuarios
const userRoutes = require('./routes/usuarios');
app.use('/usuarios', userRoutes);

// Ruta partidos
const partidoRoutes = require('./routes/partidos');
app.use('/partidos', partidoRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb+srv://iasmina:1234@cluster0.v2ld42t.mongodb.net/LigaDeportiva')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
