const CalendarModel = require('../models/calendar.model');

exports.createCalendar = async (req, res, next) => {
    try {
        let{description, beginingHour, endHour, Date} = req.body;
        let newCalendar = await CalendarModel.create({
            description,
            beginingHour,
            endHour,
            Date,
        });
        res.send({newCalendar});
    } catch (error) {
        next(error);
    }
}

exports.getAllCalendar = async (req, res, next) => {
    try {
        let calendar = await CalendarModel.find({}, "-password")
        res.send({
            count: calendar.length,
            calendar,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileCalendar = async (req, res, next) => {
    try {
        let id = req.params.id;
        let calendar = await CalendarModel.findById(id);
        if (!calendar) {
            return res.status(404).send({
                message: "calendar not found",
            });
        }
        res.send({ calendar });
    } catch (error) {
        next(error);
    }
};

exports.updateCalendar = async (req, res, next) => {
    try {
        let id = req.params.id;
        let calendar = await CalendarModel.findById(id);
        if (!calendar) {
            return res.status(404).send({
                message: "calendar not found",
            });
        }
        let {description, beginingHour, endHour, Date} = req.body;
        calendar.description = description;
        calendar.beginingHour = beginingHour;
        calendar.endHour = endHour;
        calendar.Date = Date;
        await calendar.save();
        res.send({calendar});
    } catch (error) {
        next(error);
    }
}

exports.deleteCalendar = async (req, res, next) => {
    try {
        let id = req.params.id;
        let calendar = await CalendarModel.findByIdAndDelete(id);
        if (!calendar) {
            return res.status(404).send({
                message: "calendar not found",
            });
        }
        return res.send({ 
            message: "calendar deleted",
        });
    } catch (error) {
        next(error);
    }
};