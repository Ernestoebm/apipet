const PetRegisterModel = require('../models/petRegister.model');

exports.createPetRegister = async (req, res, next) => {
    try {
        let{name, pedigreeID, breed, birthdate, gender, weight} = req.body;
        let newPetRegister = await PetRegisterModel.create({
            name,
            pedigreeID,
            breed,
            birthdate,
            gender,
            weight
        });
        res.send({newPetRegister});
    } catch (error) {
        next(error);
    }
}

exports.getAllPetRegister = async (req, res, next) => {
    try {
        let PetRegister = await PetRegisterModel.find({}, "-password")
        res.send({
            count: PetRegister.length,
            PetRegister,
        });
    } catch (error) {
        next(error);
    }
};

exports.profilePetRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let PetRegister = await PetRegisterModel.findById(id); 
        if (!PetRegister) {
            return res.status(404).send({
                message: "PetRegister not found",
            });
        }
        res.send({ PetRegister });
    } catch (error) {
        next(error);
    }
};

exports.updatePetRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let PetRegister = await PetRegisterModel.findById(id);
        if (!PetRegister) {
            return res.status(404).send({
                message: "PetRegister not found",
            });
        }
        let {name, pedigreeID, breed, birthdate, gender, weight} = req.body;
        PetRegister.name = name;
        PetRegister.pedigreeID = pedigreeID;
        PetRegister.breed = breed;
        PetRegister.birthdate = birthdate;
        PetRegister.gender = gender;
        PetRegister.weight = weight;
        await PetRegister.save();
        res.send({PetRegister});
    } catch (error) {
        next(error);
    }
}

exports.deletePetRegister = async (req, res, next) => {
    try {
        let id = req.params.id;
        let PetRegister = await PetRegisterModel.findByIdAndDelete(id);
        if (!PetRegister) {
            return res.status(404).send({
                message: "PetRegister not found",
            });
        }
        return res.send({ 
            message: "PetRegister deleted",
        });
    } catch (error) {
        next(error);
    }
};