import axios from "axios";
import { useBlogContext } from "../hooks/useBlogContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
import tempimg from "../images/IMG_4717.jpg";

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
<div className="blog-details bg-dark border rounded-sm p-4 text-white flex max-w-4xl mb-4">
  <div className="w-1/4">
    <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
      <img src={tempimg} alt="Image" className="object-cover absolute inset-0 w-full h-full" />
    </div>
  </div>
  <div className="w-3/4 pl-4">
    <h3 className="text-xl md:text-2xl font-bold">{blog.title}</h3>
    <p className="text-sm md:text-base"><strong>Content &nbsp;</strong>{blog.body}...</p>
    <p className="text-xs text-gray-500">
      {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
    </p>
    <span className="text-blue-600 cursor-pointer" hidden={!user} onClick={handleDelete}>
      delete
    </span>
    <span className="text-blue-600 cursor-pointer" hidden={!user} onClick={handleUpdate}>
      edit
    </span>
  </div>
</div>



    );
}

export default BlogDetails;