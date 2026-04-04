const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Partido = mongoose.model('Partido', new mongoose.Schema({
  deporte: String,
  equipoLocal: String,
  equipoVisitante: String,
  fecha: Date,
  ubicacion: String,
  resultado: String,
  arbitro: String,
}));

// GET - Obtener todos los partidos
router.get('/', async (req, res) => {
  const partidos = await Partido.find();
  res.json(partidos);
});

// POST - Crear un partido
router.post('/', async (req, res) => {
  const nuevo = new Partido(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// PUT - Modificar un partido
router.put('/:id', async (req, res) => {
  await Partido.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: 'Actualizado' });
});

// DELETE - Borrar un partido
router.delete('/:id', async (req, res) => {
  await Partido.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Borrado' });
});

module.exports = router;