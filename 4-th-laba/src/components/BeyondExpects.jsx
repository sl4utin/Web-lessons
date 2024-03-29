import beyondExpectData from "../mockData/beyondExpectData";
import featureImg from "../assets/img/Feature Image.png";

export const CreateBeyondExpectImgTemplate = ({beyondExpectImgData}) => {
    const { alt } = beyondExpectImgData;
    return (
        <>
        <div className="beyond_expect__left">
            <img className="feature_Image" src={featureImg} alt={alt}/>
        </div>
        </>
    );
};

export const CreateBeyondExpectRightContainerTemplate = ({beyondExpectRightContainerData}) => {
    const {header, title, description, link: {href, linkTitle}} = beyondExpectRightContainerData;
    //{header, title, description, link: {href, linkTitle}}
    return (
    <>
        <div className="beyond_expect__right">
            <p className="right__small_header">{header}</p>
            <h2 className="right__header">{title}</h2>
            <p className="container__content">{description}</p>
            <a href={href} className="right_cta">{linkTitle}</a>
        </div>
    </>
    ); 
};
const BeyondExpect = () => {
    const { beyondExpectImgData, beyondExpectRightContainerData} = beyondExpectData;
    
    return (
        <>
            <CreateBeyondExpectImgTemplate beyondExpectImgData={beyondExpectImgData}/>
            <CreateBeyondExpectRightContainerTemplate beyondExpectRightContainerData= {beyondExpectRightContainerData}/>
        </>
    );
};


export default BeyondExpect;