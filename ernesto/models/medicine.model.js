const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const medicineSchema = new Schema(
  {
    medicineName: {
      type: String,
      required: true,
    },
    firstDose: {
      type: String,
    },
    secondDose: {
      type: String,
      required: true,
    },
    frequency: {
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

const MedicineModel = mongoose.model("medicine", medicineSchema);

module.exports = MedicineModel;