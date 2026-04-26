const mongoose = require('mongoose');

// Definición del esquema para los usuarios en la base de datos
const usuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  tipo: String,
  equipo: String
}, { collection: 'usuarios' }); // Especifico el nombre de la colección porque se me crearon dos


module.exports = mongoose.model('Usuario', usuarioSchema);