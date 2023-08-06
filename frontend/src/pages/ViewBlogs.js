import { useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';
import { useBlogContext } from '../hooks/useBlogContext';

const ViewBlogs = () => {
    const {blogs, dispatch} = useBlogContext();
    
    useEffect(() => {
        const fetchBlogs = async () => {
            // fetch data from express app server
            const response = await fetch('/api/blogs');
            const json = await response.json();
            if (response.ok) {
                dispatch({type: 'GET_BLOGS', payload: json})
            }
        }
        fetchBlogs();
    }, []);
    
    return (
        <div className="blogs">
            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog}/>
            ))}
        </div>
    );
}

export default ViewBlogs;