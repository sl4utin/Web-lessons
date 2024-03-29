const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isRegistrationDataValid = (data) => {
    isObjectHasProps(data, ["registrationLeftData", "registrationRightData"]);
    
    
    const {registrationLeftData, registrationRightData} = data;
    
    isObjectHasProps(registrationLeftData, ["title", "header"]);
    
    isObjectHasProps(registrationRightData, ["description"]);
    // console.log("Норм");
}

module.exports = isRegistrationDataValid;