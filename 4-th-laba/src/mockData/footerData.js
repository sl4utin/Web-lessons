import logoImg from "../assets/img/GPT-3.svg";

export const footerUpperData = {
    header: "Хотите Шагнуть в Будущее Раньше Других?",
    button: {
        href: "#",
        label: "Запросить ранний доступ"
    }
};

export const footerBottomData = {
    logo: {
        src: logoImg,
        alt: "GPT-3 logo"
    },

    address: `ул. Профессора Поздеева, 13, к.Г,
    Пермь, Пермский край, 614013
    Все права защищены`
};

export const footerLinksData = {
    header: "Ссылки",
    elements: [
        {
            href: "#",
            label: "Овероны"
        },
        {
            href: "#",
            label: "Соц. сети"
        },
        {
            href: "#",
            label: "Счетчики"
        },
        {
            href: "#",
            label: "Контакты"
        }
    ]
};

export const footerCompanyData = {
    header: "Компания",
    elements: [
        {
            href: "#",
            label: "Условия использования"
        },
        {
            href: "#",
            label: "Перс. данные"
        },
        {
            href: "#",
            label: "Конаткты"
        }
    ]
    
};

export const footerContactData = {
    header: "Контакты",
    elements: [
        {
            href: "#",
            label: "ул. Профессора Поздеева, 13, к.Г, Пермь"
        },
        {
            href: "#",
            label: "+7 (342) 2-198-520"
        },
        {
            href: "#",
            label: "info@pstu.ru"
        }
    ]
};

export const footerData = {
    footerUpperData,
    footerBottomData,
    footerLinksData,
    footerCompanyData,
    footerContactData
};

export default footerData;