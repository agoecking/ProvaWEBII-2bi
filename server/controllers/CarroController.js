const carro = require("../models/CarroSchema");

class CarroController {
  async store(req, res) {
    try {
      var result = await carro.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
      try {
          var result = await carro.find({});
          res.status(200).json(result);
      } catch (error) {
          res.status(500).json(error);
      }
  }
  async getById(req, res) {
    try {
      var result = await carro.findById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByPlaca(req, res) {
    try {
      var result = await carro.find({placa: req.params.placa});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CarroController();
