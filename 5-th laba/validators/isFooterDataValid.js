const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const validateFooterData = (data) => {
    isObjectHasProps(data, ["header", "elements"]);
    const { elements } = data;

    const arrayLength = isArrayHasLength(elements);
    if (!arrayLength)
        throw new Error("Переданные данные - не массив или длина = 0");
    
    elements.forEach((obj) => { isObjectHasProps(obj, ["href", "label"]) });
};


const isFooterDataValid = (data) => {
    isObjectHasProps(data, [
        "footerUpperData", 
        "footerBottomData", 
        "footerLinksData", 
        "footerCompanyData", 
        "footerContactData"
    ]);

    const {
        footerUpperData, 
        footerBottomData, 
        footerLinksData, 
        footerCompanyData, 
        footerContactData
    } = data;

    //footerUpperData
    isObjectHasProps(footerUpperData, ["header", "button"]);
    const {button} = footerUpperData;
    isObjectHasProps(button, ["href", "label"]);

    //footerBottomData
    isObjectHasProps(footerBottomData, ["logo", "address"]);
    const {logo} = footerBottomData;
    isObjectHasProps(logo, ["src", "alt"]);

    //footerLinksData
    validateFooterData(footerLinksData);
    validateFooterData(footerCompanyData);
    validateFooterData(footerContactData);

};

module.exports = isFooterDataValid;