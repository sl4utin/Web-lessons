const isRegistrationDataValid = require("../validators/isRegistrationDataValid");

const {
    getRegistrationDataModel,
    postRegistrationDataModel
} = require("../model/files/registrationDataModel");

const getRegistrationData = (req, res, next) => {
    try {
        const data = getRegistrationDataModel();
        res.status(200).json(data);
    } catch(error) {
        res.status(400).json({
            error: error.message,
        });
    }
}

const postRegistrationData = (req, res, next) => {
    try {
        const data = req.body;
        isRegistrationDataValid(data);

        postRegistrationDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
}

module.exports = {getRegistrationData, postRegistrationData};