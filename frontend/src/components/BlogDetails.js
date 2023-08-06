import { useBlogContext } from "../hooks/useBlogContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({blog}) => {
    const {dispatch} = useBlogContext();

    const handleClick = async () => {
        const response = await fetch('/api/blogs/'+blog._id, {
            method: "DELETE"
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({type: "DELETE_BLOG", payload: json._id});
        }
    }

    return (
        <div className="blog-details">
            <h2>{blog.title}</h2>
            <p><strong>Content &nbsp;</strong>{blog.body.substring(0, 50)}...</p>
            <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    );
}

export default BlogDetails;