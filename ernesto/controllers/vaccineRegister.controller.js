const VaccineRegisterModel = require('../models/vaccineRegister.model');

exports.createVaccineRegister = async (req, res, next) => {
    try {
        let{name, vaccineDate, vet, notes} = req.body;
        let newVaccineRegister = await VaccineRegisterModel.create({
            name,
            vaccineDate,
            vet,
            notes,
        });
        res.send({newVaccineRegister});
    } catch (error) {
        next(error);
    }
}

exports.getAllVaccineRegister = async (req, res, next) => {
    try {
        let VaccineRegister = await VaccineRegisterModel.find({}, "-password")
        res.send({
            count: VaccineRegister.length,
            VaccineRegister,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileVaccineRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VaccineRegister = await VaccineRegisterModel.findById(id); 
        if (!VaccineRegister) {
            return res.status(404).send({
                message: "VaccineRegister not found",
            });
        }
        res.send({ VaccineRegister });
    } catch (error) {
        next(error);
    }
};

exports.updateVaccineRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VaccineRegister = await VaccineRegisterModel.findById(id);
        if (!VaccineRegister) {
            return res.status(404).send({
                message: "VaccineRegister not found",
            });
        }
        let {name, vaccineDate, vet, notes} = req.body;
        VaccineRegister.name = name;
        VaccineRegister.vaccineDate = vaccineDate;
        VaccineRegister.vet = vet;
        VaccineRegister.notes = notes;
        await VaccineRegister.save();
        res.send({VaccineRegister});
    } catch (error) {
        next(error);
    }
}

exports.deleteVaccineRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VaccineRegister = await VaccineRegisterModel.findByIdAndDelete(id);
        if (!VaccineRegister) {
            return res.status(404).send({
                message: "VaccineRegister not found",
            });
        }
        return res.send({ 
            message: "VaccineRegister deleted",
        });
    } catch (error) {
        next(error);
    }
};