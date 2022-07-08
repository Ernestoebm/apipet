const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const calendarSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    beginingHour: {
      type: String,
      required: true,
    },
    endHour: {
      type: String,
      required: true,
    },
    Date: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const CalendarModel = mongoose.model("calendar", calendarSchema);

module.exports = CalendarModel;