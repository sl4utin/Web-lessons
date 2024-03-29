import registrationData from "../mockData/registrationData";

export const CreateRegistrationLeftTemplate = ({registrationLeftData}) => {
    const {title, header} = registrationLeftData;
    return (
        <>
            <div className="left__registration">
                <p className="left__cta">{title}</p>
                <p className="container__content">{header}</p>
            </div>
        </>
    )  
};

export const CreateRegistrationRightTemplate = ({registrationRightData}) => {
    const {description} = registrationRightData;
    return (
    <>
        <div className="right__registration">
            <button className="registration__btn">{description}</button>
        </div>
    </>
    );  
};

const Registration = () => {
    const {registrationLeftData, registrationRightData} = registrationData
    return (
        <>
            <CreateRegistrationLeftTemplate registrationLeftData = {registrationLeftData}/>
            <CreateRegistrationRightTemplate registrationRightData = {registrationRightData}/>
        </>
    );
};

export default Registration;