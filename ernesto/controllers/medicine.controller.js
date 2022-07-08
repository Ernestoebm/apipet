const MedicineModel = require('../models/medicine.model');

exports.createMedicine = async (req, res, next) => {
    try {
        let{medicineName, firstDose, secondDose, frequency, dose, vet} = req.body;
        let newMedicine = await MedicineModel.create({
            medicineName,
            firstDose,
            secondDose,
            frequency,
            dose,
            vet
        });
        res.send({newMedicine});
    } catch (error) {
        next(error);
    }
}

exports.getAllMedicine = async (req, res, next) => {
    try {
        let medicine = await MedicineModel.find({}, "-password")
        res.send({
            count: medicine.length,
            medicine,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileMedicine = async (req, res, next) => {
    try {
        let medicineName = req.params.medicineName;
        let medicine = await MedicineModel.findOne({ medicineName }, "-password"); 
        if (!medicine) {
            return res.status(404).send({
                message: "medicine not found",
            });
        }
        res.send({ medicine });
    } catch (error) {
        next(error);
    }
};

exports.updateMedicine = async (req, res, next) => {
    try {
        let id = req.params.id;
        let medicine = await MedicineModel.findById(id);
        if (!medicine) {
            return res.status(404).send({
                message: "medicine not found",
            });
        }
        let {medicineName, firstDose, secondDose, frequency, dose, vet} = req.body;
        medicine.medicineName = medicineName;
        medicine.firstDose = firstDose;
        medicine.secondDose = secondDose;
        medicine.frequency = frequency;
        medicine.dose = dose;
        medicine.vet = vet;
        await medicine.save();
        res.send({medicine});
    } catch (error) {
        next(error);
    }
}

exports.deleteMedicine = async (req, res, next) => {
    try {
        let id = req.params.id;
        let medicine = await MedicineModel.findByIdAndDelete(id);
        if (!medicine) {
            return res.status(404).send({
                message: "medicine not found",
            });
        }
        return res.send({ 
            message: "medicine deleted",
        });
    } catch (error) {
        next(error);
    }
};