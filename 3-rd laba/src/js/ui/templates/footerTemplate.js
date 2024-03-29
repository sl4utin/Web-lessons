export const createFooterUpperTemplate = ({header, button: {href, label}}) => {
    
    const template = `
    <div class="footer__header">
        <h1 class="top__header">${header}</h1>
    </div>
    <div class="footer__middle">
        <a href="${href}">
            <button class="early_access_btn">${label}</button>
        </a>
    </div>
    `
    return template;
};

export const createFooterLogoTemplate = ({logo: {src, alt}, address}) => {
    
    const template = `
    <div class="logo">
        <img class="GPT-3_logo" src=${src} alt=${alt}>
        <p class="address">${address}</p>
    </div>
    `
    return template;
};

export const createFooterLinksTemplate = ({href, label}) => {
    return `<a class="footer__link" href="${href}">${label}</a>`;
};


export const createFooterColumnTemplate = ({header, elements}) => {
    const footerLinksTemplate = elements.map((element) => createFooterLinksTemplate(element)).join("");

    const result = `
    <div class="footer__links">
        <div class="footer__info_links">
            <p class="bottom__links_header">${header}</p>
            ${footerLinksTemplate}
        </div>
    </div>
    `;
   return result;
};


export const footerTemplate = ({footerUpperData, footerBottomData, footerLinksData, footerCompanyData, footerContactData}) => {
    const footerUpperTemplate = createFooterUpperTemplate(footerUpperData);
    const footerLogoTemplate = createFooterLogoTemplate(footerBottomData);
    const footerLinksTemplate = createFooterColumnTemplate(footerLinksData);
    const footerCompanyTemplate = createFooterColumnTemplate(footerCompanyData);
    const footerContactTemplate = createFooterColumnTemplate(footerContactData);

    const resultTemplate = `
        ${footerUpperTemplate}
        <div class="footer__bottom">
            ${footerLogoTemplate}
            <div class="footer__bottom_right">
                ${footerLinksTemplate}
                ${footerCompanyTemplate}
                ${footerContactTemplate}
            </div>
        </div>
        <div class="footer__copyright">
            <p class="copyright__info"> © 2023 GPT-3. Все права защищены.</p>
        </div>
    `
    return resultTemplate;
    
}