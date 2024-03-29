const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
    isObjectHasProps(data, ["blogHeaderData", "blogPostData"]);
    const {blogHeaderData , blogPostData} = data;
    isObjectHasProps(blogHeaderData, ["header"]);

    const arrayLength = isArrayHasLength(blogPostData);

    if (!arrayLength)
        throw new Error("Переданные данные - не массив или длина = 0");

    blogPostData.forEach((obj) => {
        isObjectHasProps(obj, ["isBig", "img", "post"]);

        const { img, post } = obj;
        isObjectHasProps(img, ["src", "alt"]);
        isObjectHasProps(post, ["date", "header", "link"]);
        
        const { link } = post;
        isObjectHasProps(link, ["href", "label"]);
    });

}

module.exports = isBlogDataValid;