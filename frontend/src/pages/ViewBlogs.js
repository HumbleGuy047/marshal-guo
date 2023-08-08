import { useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';
import { useBlogContext } from '../hooks/useBlogContext';
import { Link } from 'react-router-dom';

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
    }, [dispatch]);
    
    return (
        <div className="blogs">
            <Link to="/createBlog"><button className='btn'>Create Blog</button></Link>

            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog}/>
            ))}
        </div>
    );
}

export default ViewBlogs;