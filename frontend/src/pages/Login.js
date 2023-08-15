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

<div className="flex justify-center items-center h-screen bg-gray-600">
    <div className="max-w-md w-full bg-gray-800 dark:bg-gray-300 p-8 rounded-lg shadow-md">
        <form method="post" onSubmit={handleSubmit}>
            <h3 className="mb-6 text-center text-lg font-semibold text-gray-800 dark:text-gray-900">Go to your account</h3>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-900">
                    Your email
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-900">
                    Your password
                </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="input-field"
                    required
                />
            </div>

            <button
                disabled={isPending}
                type="submit"
                className="button-primary bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>

            {error && (
                <div className="error-message text-red-500 dark:text-red-400">
                    {error}
                </div>
            )}
        </form>
    </div>
</div>



    );
}
export default Login;