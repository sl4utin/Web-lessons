const isBeyondExpectDataValid = require("../validators/isBeyondExpectDataValid");

const {
    getBeyondExpectDataModel,
    postBeyondExpectDataModel
} = require("../model/files/beyondExpectDataModel");

const getBeyondExpectData = (req, res, next) => {
    try {
        const data = getBeyondExpectDataModel();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
} 

const postBeyondExpectData = (req, res, next) => {
    try {
        const data = req.body;
    
        // валидируем данные
        // если невалидны, то бросит ошибку
        isBeyondExpectDataValid(data);
    
        // если с данными все ок, тогда пишем в файл через модель файлов
        postBeyondExpectDataModel(JSON.stringify(data));
        res.status(200).json({
          message: "Данные успешно обновлены",
        });
      } catch (error) {
        res.status(400).json({
          error: error.message,
        });
      }
}

module.exports= {getBeyondExpectData, postBeyondExpectData};