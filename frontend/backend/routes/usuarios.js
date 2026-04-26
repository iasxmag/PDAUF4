const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

// GET - Obtener todos los usuarios
router.get('/', async (req, res) => {
  const usuarios = await User.find();
  res.json(usuarios);
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(401).json({ error: 'Credenciales incorrectas' });
  }

  res.json({
    _id: user._id,
    username: user.username,
    tipo: user.tipo,
    equipo: user.equipo
  });
});

// REGISTRO
router.post('/register', async (req, res) => {
  try {
    const nuevoUsuario = new User({
      username: req.body.username,
      password: req.body.password,
      tipo: req.body.tipo,
      equipo: req.body.equipo
    });

    await nuevoUsuario.save();

    res.json({
      mensaje: 'Usuario creado correctamente',
      usuario: nuevoUsuario
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

module.exports = router;



