import axios from "axios";
import { useBlogContext } from "../hooks/useBlogContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const BlogDetails = ({blog}) => {
    const {state:{user}} = useAuthContext();
    const {dispatch} = useBlogContext();
    const handleDelete = async () => {
        if (!user) {
            return;
        }
        const baseURL = process.env.REACT_APP_DEV === 'true' ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_URL; 
        await axios.delete(`${baseURL}/api/blogs/${blog._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`,
            }
        }).then( response =>{
            dispatch({type: "DELETE_BLOG", payload: response.data._id});
        }).catch(err => console.log(err));
    }

    const handleUpdate = async () => {
        console.log('update')
    }

    return (
        <div className="blog-details">
            <h2>{blog.title}</h2>
            <p><strong>Content &nbsp;</strong>{blog.body}...</p>
            <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <span hidden={!user} onClick={handleDelete}>delete</span>
            <span hidden={!user} onClick={handleUpdate}>edit</span>
        </div>
    );
}

export default BlogDetails;