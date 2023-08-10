import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
// require('dotenv').config();

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
       
        const response = await fetch(`https://marshal-guo-api.vercel.app/api/blogs`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
                'Origin': 'https://marshal-guo.vercel.app'
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