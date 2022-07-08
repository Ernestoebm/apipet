const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const vaccineRegisterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    vaccineDate: {
      type: String,
    },
    vet: {
      type: String,
      required: true,
    },
    notes: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const VaccineRegisterModel = mongoose.model("vaccine", vaccineRegisterSchema);

module.exports = VaccineRegisterModel;