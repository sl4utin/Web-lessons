import blogData from "../mockData/blogData";


export const CreateHeaderBlogTemplate = ({blogHeaderData}) => {
    const {header} = blogHeaderData;
    return (
        <>
            <div className="header_blog">
                <h1>{header}</h1>
            </div>
        </>
    );
};

export const CreateBlogLeftArtTemplate = ({item}) => {
    const {isBig, img: {src , alt}, post:{date, header, link: {href, label}}} = item;
    //console.log(src);
    return (
        (isBig) ? 
        <> 
            <img src={src} alt={alt}/>
            <div className="description_art_main">
                <div className="description__art_up">
                    <p className="date">{date}</p>
                    <p className="head_main_art">{header}</p>
                </div>
            <a href={href} className="read_art_main">{label}</a>
            </div> 
        </>: ""
    );
};

export const CreateBlogRightArtTemplate =  ({item}) => {
    const {isBig, img: {src, alt}, post:{date, header, link: {href, label}}} = item;
    return (
        !isBig ?
        <>
            <div className="one_minor_art">
                <img src = {src} alt={alt}/>
                <div className="description_art">
                    <p className="date">{date}</p>
                    <p className="head_minor_art">{header}</p>
                    <a href={href} className="read_art_main">{label}</a>
                </div>
            </div>
        </>: ""
    );
};

const Blog = () => {
     const {blogHeaderData, blogPostData} = blogData;
    // console.log(blogPostData);
        return( 
        <>
            <CreateHeaderBlogTemplate blogHeaderData = {blogHeaderData}/>
            <div className="all_art">
                <div className="left_art">
                    {blogPostData.map((item, index) => 
                        (<CreateBlogLeftArtTemplate key={index} item={item}/>
                    ))} 
                </div>
                <div className="right_art">
                    {blogPostData.map((item, index) => 
                        (<CreateBlogRightArtTemplate key={index} item={item}/>
                    ))} 
                </div>
            </div>
        </>
        );
};

export default Blog;
