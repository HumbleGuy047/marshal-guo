import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isPending } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className="login">
            <form className="login" method="post" onSubmit={handleSubmit}>
                <h3>Go to your account</h3>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button disabled={isPending}>Log in!</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}
export default Login;