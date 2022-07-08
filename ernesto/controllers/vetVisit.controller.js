const VetVisitModel = require('../models/vetVisit.model');

exports.createVetVisit = async (req, res, next) => {
    try {
        let{vetName, visitDate, syntoms, notes} = req.body;
        let newVetVisit = await VetVisitModel.create({
            vetName,
            visitDate,
            syntoms,
            notes,
        });
        res.send({newVetVisit});
    } catch (error) {
        next(error);
    }
}

exports.getAllVetVisit = async (req, res, next) => {
    try {
        let VetVisit = await VetVisitModel.find({}, "-password")
        res.send({
            count: VetVisit.length,
            VetVisit,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileVetVisit = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VetVisit = await VetVisitModel.findById(id); 
        if (!VetVisit) {
            return res.status(404).send({
                message: "VetVisit not found",
            });
        }
        res.send({ VetVisit });
    } catch (error) {
        next(error);
    }
};

exports.updateVetVisit = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VetVisit = await VetVisitModel.findById(id);
        if (!VetVisit) {
            return res.status(404).send({
                message: "VetVisit not found",
            });
        }
        let {vetName, visitDate, syntoms, notes} = req.body;
        VetVisit.vetName = vetName;
        VetVisit.visitDate = visitDate;
        VetVisit.syntoms = syntoms;
        VetVisit.notes = notes;
        await VetVisit.save();
        res.send({VetVisit});
    } catch (error) {
        next(error);
    }
}

exports.deleteVetVisit = async (req, res, next) => {
    try {
        let id = req.params.id;
        let VetVisit = await VetVisitModel.findByIdAndDelete(id);
        if (!VetVisit) {
            return res.status(404).send({
                message: "VetVisit not found",
            });
        }
        return res.send({ 
            message: "VetVisit deleted",
        });
    } catch (error) {
        next(error);
    }
};