const UserModel = require("../models/user.model");

exports.getAllUsers = async (req, res, next) => {
    try {
        let users = await UserModel.find({}, "-password");
        res.send({
        count: users.length,
        users,
    });
    } catch (err) {
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        let email = req.params.email;
        let user = await UserModel.findOne({ email }, "-password");
        if (!user) {
        return res.status(404).send({
            message: "user not found",
        });
        }
        res.send({ user });
    } catch (err) {
        next(err);
    }
};

//TODO: COMO HACER PAGINACION

exports.createUser = async (req, res, next) => {
    try {
        //TODO: Requiere validacion
        let {email, password, phone, dui} = req.body;
        let newUser = await UserModel.create({
            email,
            phone,
            password,
            dui
        });
        newUser.password = undefined;
        res.send({newUser});
    } catch (error) {
        next(error)
    }
};  

exports.updateUser = async (req, res, next) => {
    try {
        let usernameToUpdate = req.params.email;
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        let email = req.params.email;
        let { deletedCount } = await UserModel.deleteOne({ email });
        if (deletedCount == 1) {
        return res.send({
            message: "successfully deleted",
        });
    }
        return res.status(400).send({
        message: "cannot delete the user, maybe is delete before",
        });
    } catch (err) {
        next(err);
    }
};