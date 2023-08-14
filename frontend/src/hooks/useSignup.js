import axios from 'axios';
const { useState } = require('react');
const { useAuthContext } = require('./useAuthContext');

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsPending(true);
        setError(null);
        const baseURL = process.env.REACT_APP_DEV === 'true' ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_URL; 
        await axios.post(`${baseURL}/api/users/signup`, {email, password}, {
            headers: { 
                'Content-Type': 'application/json', 
            },
        })
        .then( response => {
            // save to local storage
            localStorage.setItem('user', JSON.stringify(response.data));
            // update auth context
            dispatch({ type: 'LOGIN', payload: response.data });
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
        });

        setIsPending(false);
    }
    return {signup, isPending, error};    
}