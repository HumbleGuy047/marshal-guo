import { useBlogContext } from "../hooks/useBlogContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
require('dotenv').config();

const BlogDetails = ({blog}) => {
    const {dispatch} = useBlogContext();
    const {state:{user}} = useAuthContext();
    const handleClick = async () => {
        if (!user) {
            return;
        }
        const response = await fetch(`${process.env.API_URL}/api/blogs/${blog._id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Origin': process.env.ORIGIN_URL
            }
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