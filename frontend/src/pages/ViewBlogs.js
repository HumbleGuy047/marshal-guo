import { useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';
import { useBlogContext } from '../hooks/useBlogContext';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext';

const ViewBlogs = () => {
    const {blogs, dispatch} = useBlogContext();
    const {state: {user}} = useAuthContext();
    useEffect(() => {
        const fetchBlogs = async () => {
            // fetch data from express app server
            const response = await fetch('/api/blogs', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
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