const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const vetVisitSchema = new Schema(
  {
    vetName: {
      type: String,
      required: true,
    },
    visitDate: {
      type: String,
      required: true,
    },
    syntoms: {
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

const VetVisitModel = mongoose.model("vetVisit", vetVisitSchema);

module.exports = VetVisitModel;