import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ title, body })
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }else{
            setError(null);
            setTitle('');
            setBody('');
            console.log('Blog created successfully' + json);
        }
        
    }

    return (
        <div className="create-blog">
            <form method="post" onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input type="text" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button>Finish</button>
            </form>
        </div>
    );
}

export default CreateBlog;