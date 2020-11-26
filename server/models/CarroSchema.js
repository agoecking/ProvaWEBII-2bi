const mongoose = require("mongoose");

const carroSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  placa: { type: String, required: true },
  ano: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Carros", carroSchema);
