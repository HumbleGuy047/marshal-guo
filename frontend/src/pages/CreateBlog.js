import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
require('dotenv').config();

const CreateBlog = () => {
    const {dispatch} = useBlogContext();
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmtpyFields] = useState([]);

    const navigate = useNavigate();

    const {state: {user}} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in to create a blog');
            return;
        }
       
        const response = await fetch(`${process.env.API_URL}/api/blogs`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
                'Origin': process.env.Origin_URL
            },
            body: JSON.stringify({ title, body })
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setEmtpyFields(json.emptyFields);
        }else{
            setError(null);
            setTitle('');
            setBody('');
            console.log('Blog created successfully' + json);
            setEmtpyFields([]);
            dispatch({type: 'ADD_BLOG', payload: json});
            navigate('/');
        }

    }

    return (
        <div className="create-blog">
            <form method="post" onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <div>
                    <label htmlFor="title">Title</label>
                    <input className={emptyFields.includes('title') ? 'error': ''} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input className={emptyFields.includes('body') ? 'error': ''} type="text" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button>Finish</button>
            </form>
        </div>
    );

}
export default CreateBlog;