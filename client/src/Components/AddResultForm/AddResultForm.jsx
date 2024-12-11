import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Award, User, Trophy, Star, ListChecks, Grid, Clipboard } from 'lucide-react';

const API_URL = 'http://localhost:3005/api/result';

const AddResultForm = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        studentName: '',
        programName: '',
        teamName: '',
        category: '',
        stage: '',
        prize: '',
        grade: '',
        points: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (state && state.result) {
            setFormData(state.result);
        }
    }, [state]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (state && state.result) {
                await axios.put(`${API_URL}/${state.result._id}`, formData);
            } else {
                await axios.post(API_URL, formData);
            }
            navigate("/cart");
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
        }
    };

    // Shared input field component
    const FormInput = ({ name, icon, type = 'text', options = [] }) => (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
            {type === 'select' ? (
                <>
                    <select
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 
                        transition duration-300 ease-in-out appearance-none"
                    >
                        <option value="">{`Select ${name.charAt(0).toUpperCase() + name.slice(1)}`}</option>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </>
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 
                    transition duration-300 ease-in-out"
                />
            )}
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-700 shadow-2xl rounded-2xl overflow-hidden transform transition-all">
                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
                            {state && state.result ? 'Edit Result' : 'Add Result'}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-300">
                            Comprehensive Result Management
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                        {/* First Column */}
                        <div className="space-y-4">
                            <FormInput 
                                name="studentName" 
                                icon={<User className="w-5 h-5 text-gray-400 dark:text-gray-500" />} 
                            />
                            <FormInput 
                                name="programName" 
                                icon={<Clipboard className="w-5 h-5 text-gray-400 dark:text-gray-500" />} 
                            />
                            <FormInput 
                                name="teamName" 
                                type="select"
                                icon={<Grid className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['KAMAR', 'HILAL', 'HIJAS', 'LULU', 'HAIKI', 'MARAM']}
                            />
                            <FormInput 
                                name="category" 
                                type="select"
                                icon={<ListChecks className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['SINGLE', 'GROUP']}
                            />
                        </div>

                        {/* Second Column */}
                        <div className="space-y-4">
                            <FormInput 
                                name="stage" 
                                type="select"
                                icon={<Star className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['STAGE', 'NON-STAGE']}
                            />
                            <FormInput 
                                name="prize" 
                                type="select"
                                icon={<Trophy className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['FIRST', 'SECOND', 'THIRD']}
                            />
                            <FormInput 
                                name="grade" 
                                type="select"
                                icon={<Star className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['A', 'B', 'C']}
                            />
                            <FormInput 
                                name="points" 
                                type="select"
                                icon={<Star className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
                                options={['1', '2', '4', '6', '7', '8', '9', '10', '11', '13', '15', '20', '25']}
                            />
                        </div>

                        {/* Submit Button - Full Width */}
                        <div className="col-span-full mt-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg 
                                hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 
                                transform hover:-translate-y-1 shadow-lg hover:shadow-xl 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                {state && state.result ? 'Update Result' : 'Add Result'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddResultForm;