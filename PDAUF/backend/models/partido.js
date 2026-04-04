const mongoose = require('mongoose');
// Definición del esquema para los partidos en la base de datos
const partidoSchema = new mongoose.Schema({
  deporte: { type: String, required: true },
  equipoLocal: { type: String, required: true },
  equipoVisitante: { type: String, required: true },
  fecha: { type: Date, required: true },
  ubicacion: { type: String },
  arbitro: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resultado: { type: String, default: 'Pendiente' }
});

module.exports = mongoose.model('Partido', partidoSchema);