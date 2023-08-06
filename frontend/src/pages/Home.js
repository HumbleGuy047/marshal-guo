import {useState, useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';

const Home = () => {
    const [blogs, setBlogs] = useState(null);   // create blogs object to contain response json

    useEffect(() => {
        const fetchBlogs = async () => {
            // fetch data from express app server
            const response = await fetch('https://marshal-guo-api.vercel.app/api/blogs');
            // {
            //     method: 'GET',
            //     mode: 'cors', // Set the 'mode' to 'cors' to enable CORS
            //     headers: {
            //       'Origin': 'https://marshal-guo.vercel.app' // Set the 'Origin' header to your domain
            //     }
            // });
            const json = await response.json();
            if (response.ok) {
                setBlogs(json);
            }
        }
        fetchBlogs();
    }, []);
    return (
        <div className="home">
            <div className="blogs">
                {blogs && blogs.map(blog => (
                    <BlogDetails key={blog._id} blog={blog}/>
                ))}
            </div>
        </div>
    );
}

export default Home;