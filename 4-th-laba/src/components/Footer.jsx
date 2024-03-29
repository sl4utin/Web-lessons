import footerData from "../mockData/footerData";

export const CreateFooterUpperTemplate = ({footerUpperData}) => {
    const {header, button: {href, label}} = footerUpperData;

    return (
        <>
            <div className="footer__header">
                <h1 className="top__header">{header}</h1>
            </div>
            <div className="footer__middle">
                <a href={href}>
                    <button className="early_access_btn">{label}</button>
                </a>
            </div>
        </>
    );
};

export const CreateFooterLogoTemplate = ({footerBottomData}) => {
  const {logo: {src, alt}, address} = footerBottomData;
  return (
    <>
        <div className="logo">
            <img className="GPT-3_logo" src={src} alt={alt} />
            <p className="address">{address}</p>
        </div>
    </>
  );
};

export const CreateFooterLinksTemplate = ({item}) => {
  const {href, label} = item;
  return (<> <a className="footer__link" href={href}>{label}</a> </>);
};

export const CreateFooterColumnTemplate = ({footerElement}) => {
    const {header, elements} = footerElement;
    return (
    <>
        <div className="footer__links">
            <div className="footer__info_links">
                <p className="bottom__links_header">{header}</p>
                {elements.map((item, index) =>
                (
                    <CreateFooterLinksTemplate key={index} item={item}/>
                ))}
            </div>
        </div>
    </>
    )
};

const FooterTemplate = () => {
    const {footerUpperData, footerBottomData, footerLinksData, footerCompanyData, 
    footerContactData} = footerData;

    return (
        <>
            <CreateFooterUpperTemplate footerUpperData={footerUpperData}/>
            <div className="footer__bottom">
                <CreateFooterLogoTemplate footerBottomData={footerBottomData}/>
                <div className="footer__bottom_right">
                    <CreateFooterColumnTemplate footerElement={footerLinksData}/>
                    <CreateFooterColumnTemplate footerElement={footerCompanyData}/>
                    <CreateFooterColumnTemplate footerElement={footerContactData}/>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="copyright__info"> © 2023 GPT-3. Все права защищены.</p>
            </div>
        </>
    )
};

export default FooterTemplate;