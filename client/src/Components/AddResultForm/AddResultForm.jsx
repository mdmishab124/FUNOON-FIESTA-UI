import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const API_URL = 'http://localhost:3005/api/result';

const AddResultForm = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        studentName: '',
        programName: '',
        place: '',
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

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                {state && state.result ? 'Edit Result' : 'Add Result'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="studentName"
                    placeholder="Student Name"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="place"
                    placeholder="Place of student"
                    value={formData.place}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="programName"
                    placeholder="Program Name"
                    value={formData.programName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Team</option>
                    <option value="KAMAR">KAMAR</option>
                    <option value="HILAL">HILAL</option>
                    <option value="HIJAS">HIJAS</option>
                    <option value="LULU">LULU</option>
                    <option value="HAIKI">HAIKI</option>
                    <option value="MARAM">MARAM</option>
                </select>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Category</option>
                    <option value="Single">SINGLE</option>
                    <option value="Group">GROUP</option>
                </select>
                <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Stage</option>
                    <option value="Stage">STAGE</option>
                    <option value="Non-Stage">NON-STAGE</option>
                </select>
                <select
                    name="prize"
                    value={formData.prize}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Prize</option>
                    <option value="First">FIRST</option>
                    <option value="Second">SECOND</option>
                    <option value="Third">THIRD</option>
                </select>
                <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select
                    name="points"
                    value={formData.points}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Points</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="13">13</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {state && state.result ? 'Update Result' : 'Add Result'}
                </button>
            </form>
        </div>
    );
};

export default AddResultForm;
