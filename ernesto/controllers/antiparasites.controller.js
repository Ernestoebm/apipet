const AntiParasitesModel = require('../models/antiparasites.model');

exports.createAntiParasite = async (req, res, next) => {
    try {
        let{treatName, firstDose, secondDose, frequency, treatType, dose, vet} = req.body;
        let newAntiParasite = await AntiParasitesModel.create({
            treatName,
            firstDose,
            secondDose,
            frequency,
            treatType,
            dose,
            vet
        });
        res.send({newAntiParasite});
    } catch (error) {
        next(error);
    }
}

exports.getAllAntiParasite = async (req, res, next) => {
    try {
        let antiparasite = await AntiParasitesModel.find({}, "-password")
        res.send({
            count: antiparasite.length,
            antiparasite,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileAntiParasite = async (req, res, next) => {
    try {
        let treatName = req.params.treatName;
        let antiparasite = await AntiParasitesModel.findOne({treatName}, "-password");
        if (!antiparasite) {
            return res.status(404).send({
                message: "antiparasite not found",
            });
        }
        res.send({ antiparasite });
    } catch (error) {
        next(error);
    }
};

exports.updateAntiParasite = async (req, res, next) => {
    try {
        let id = req.params.id;
        let antiparasite = await AntiParasitesModel.findById(id);
        if (!antiparasite) {
            return res.status(404).send({
                message: "antiparasite not found",
            });
        }
        let {treatName, firstDose, secondDose, frequency, treatType, dose, vet} = req.body;
        antiparasite.treatName = treatName;
        antiparasite.firstDose = firstDose;
        antiparasite.secondDose = secondDose;
        antiparasite.frequency = frequency;
        antiparasite.treatType = treatType;
        antiparasite.dose = dose;
        antiparasite.vet = vet;
        await antiparasite.save();
        res.send({antiparasite});
    } catch (error) {
        next(error);
    }
}

exports.deleteAntiParasite = async (req, res, next) => {
    try {
        let id = req.params.id;
        let antiparasite = await AntiParasitesModel.findByIdAndDelete(id);
        if (!antiparasite) {
            return res.status(404).send({
                message: "antiparasite not found",
            });
        }
        return res.send({ 
            message: "antiparasite deleted",
        });
    } catch (error) {
        next(error);
    }
};