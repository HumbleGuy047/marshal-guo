import axios from "axios";
import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateBlog = () => {
    const {dispatch} = useBlogContext();
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmtpyFields] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const {state: {user}} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setError(null);
        const baseURL = process.env.REACT_APP_DEV === 'true' ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_URL; 
        await axios.post(`${baseURL}/api/blogs`, {title, body},{
            headers: {
                'Authorization': `Bearer ${user.token}`,
            },
        }).then( response => {
                setTitle('');
                setBody('');
                console.log('Blog created successfully' + response.data);
                setEmtpyFields([]);
                dispatch({type: 'ADD_BLOG', payload: response.data});
                navigate('/');
            }
        ).catch(err => {
            console.log(err);
            setError(err.message);
            setEmtpyFields(err.response.data.emptyFields);
        });
        
        setIsPending(false);
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
                <button disabled={isPending} type="submit">Finish</button>
            </form>
        </div>
    );

}
export default CreateBlog;