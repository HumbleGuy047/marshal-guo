const { useState } = require('react');
const { useAuthContext } = require('./useAuthContext');

require('dotenv').config();

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsPending(true);
        setError(null);

        const response = await fetch(`${process.env.API_URL}/api/users/signup`, {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json', 
                'Origin': process.env.Origin_URL 
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
    return {signup, isPending, error};    
}