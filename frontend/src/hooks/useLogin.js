const { useState } = require('react');
const { useAuthContext } = require('./useAuthContext');
require('dotenv').config();

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsPending(true);
        setError(null);

        const response = await fetch(`https://marshal-guo-api.vercel.app/api/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json', 
                'Origin': `https://marshal-guo.vercel.app`
            },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();

        if (!response.ok) {
            setIsPending(false);
            setError(json.error);
        }

        if (response.ok) {
            // save to local storage
            localStorage.setItem('user', JSON.stringify(json));
            // update auth context
            dispatch({ type: 'LOGIN', payload: json });
            setIsPending(false);
        }
    }
    return {login, isPending, error};    
}