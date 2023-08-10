import { useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';
import { useBlogContext } from '../hooks/useBlogContext';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext';
// require('dotenv').config();

const ViewBlogs = () => {
    const {blogs, dispatch} = useBlogContext();
    const {state: {user}} = useAuthContext();
    useEffect(() => {
        const fetchBlogs = async () => {
            // fetch data from express app server
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs`, {
                mode: 'cors', // Set the 'mode' to 'cors' to enable CORS
                headers: {
                    'Authorization': `Bearer ${user.token}`,    // Show API the user token
                    'Origin': process.env.REACT_APP_ORIGIN_URL // Set the 'Origin' header to your domain
                }
            });
            const json = await response.json();
            if (response.ok) {
                dispatch({type: 'GET_BLOGS', payload: json})
            }
        }

        if (user) {
            fetchBlogs();
        } 
    }, [dispatch, user]);
    
    return (
        <div className="blogs">
            {blogs && <Link to="/createBlog"><button className='btn'>Create Blog</button></Link>}
            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog}/>
            ))}
        </div>
    );
}

export default ViewBlogs;