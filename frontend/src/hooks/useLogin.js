import axios from 'axios';
const { useState } = require('react');
const { useAuthContext } = require('./useAuthContext');

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsPending(true);
        setError(null);
        const baseURL = process.env.REACT_APP_DEV === 'true' ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_URL; 

        await axios.post(`${baseURL}/api/users/login`, {email, password}, {
            headers: { 
                'Content-Type': 'application/json', 
            }})
        .then(response => {            
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response.data);
            // update auth context
            dispatch({ type: 'LOGIN', payload: response.data });
        }
        ).catch(err => {
            console.log(err);
            setError(err.message);
        });


        setIsPending(false);
    }
    return {login, isPending, error};    
}