const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petRegisterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pedigreeID: {
      type: String,
    },
    breed: {
      type: String,
      required: true,
    },
    birthdate: {
        type: String,
        required: true,
      },
    gender: {
        type: String,
        required: true,
      },
    weight: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const PetRegisterModel = mongoose.model("petRegister", petRegisterSchema);

module.exports = PetRegisterModel;