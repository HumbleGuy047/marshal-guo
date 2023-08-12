import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isPending, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    }

    return (
        <div className="signup">
            <form className="login" method="post" onSubmit={handleSubmit}>
                <h3>Create an account</h3>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button disabled={isPending}>Sign up!</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );

}
export default Signup;