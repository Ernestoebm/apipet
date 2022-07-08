const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const antiParasitesSchema = new Schema(
  {
    treatName: {
      type: String,
      required: true,
    },
    firstDose: {
      type: String,
      required: true,
    },
    secondDose: {
      type: String,
      required: true,
    },
    frequency: {
        type: String,
        required: true,
      },
    treatType: {
        type: String,
        required: true,
      },
    dose: {
        type: String,
        required: true,
      },
    vet: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const AntiParasitesModel = mongoose.model("antiparasites", antiParasitesSchema);

module.exports = AntiParasitesModel;