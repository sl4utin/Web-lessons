import firstImg from "../assets/img/1_art.png";
import secondImg from "../assets/img/2_art.png";
import thirdImg from "../assets/img/3_art.png";
import forthImg from "../assets/img/4_art.png";
import fifthImg from "../assets/img/5_art.png";

export const blogHeaderData = {
    header: `Многое Происходит, \nМы Ведем об Этом Блог.`
};

export const blogPostData = [
    //Главная
    {
        isBig: true,
        img: {
            src: firstImg,
            alt: "nft1"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },
        
    //Маленькая 1
    {
        isBig: false,
        img: {
            src: secondImg,
            alt: "nft2"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    //Маленькая 2
    {
        isBig: false,
        img: {
            src: thirdImg,
            alt: "nft3"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    //Маленькая 3
    {
        isBig: false,
        img: {
            src: forthImg,
            alt: "nft4"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    //Маленькая 4
    {
        isBig: false,
        img: {
            src: fifthImg,
            alt: "nft5"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

];

const blogData = {
    blogHeaderData,
    blogPostData,
};

export default blogData;