const express = require('express');
const router = express.Router();

const carro = require('../models/CarroSchema');
const carroControllers = require('../controllers/CarroController');

router.post('/carro/cadastrar', carroControllers.store);
router.get('/carro/listar', carroControllers.get);