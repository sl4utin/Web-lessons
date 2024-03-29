const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBeyondExpectDataValid = (data) => {
    isObjectHasProps(data, [ "beyondExpectImgData", "beyondExpectRightContainerData" ]);
    
    const {beyondExpectImgData , beyondExpectRightContainerData} = data;
    isObjectHasProps(beyondExpectImgData, ["src", "alt"]);
    isObjectHasProps(beyondExpectRightContainerData, [
        "header", 
        "title",
        "description",
        "link"
    ]);

    const {link} = beyondExpectRightContainerData;
    isObjectHasProps(link, ["href", "linkTitle"]);
};

module.exports = isBeyondExpectDataValid;