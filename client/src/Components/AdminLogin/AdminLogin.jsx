// AdminLogin.js
import React, { useState } from 'react';
import { User, LockKeyhole, AlertCircle, EyeOff, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth(); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (login(username, password)) {
            navigate('/addresult');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-md bg-white dark:bg-gray-700 shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
                            Admin Portal
                        </h2>
                        <p className="text-gray-500 dark:text-gray-300">
                            Secure Access Management
                        </p>
                    </div>

                    {error && (
                        <div className="flex items-center bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 p-3 rounded-lg space-x-3">
                            <AlertCircle className="w-6 h-6" />
                            <span className="flex-1">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setError('');
                                }}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 
                  transition duration-300 ease-in-out"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LockKeyhole className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 
                  transition duration-300 ease-in-out"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg 
                hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 
                transform hover:-translate-y-1 shadow-lg hover:shadow-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="text-center">
                        <a
                            href="#"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
