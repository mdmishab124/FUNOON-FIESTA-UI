import { useEffect, useState } from 'react';
import { useResults } from '../../../context/ResultsContext';

const TopStudents = () => {
    const { results } = useResults();
    const [topStudents, setTopStudents] = useState([]);

    useEffect(() => {
        if (!results || results.length === 0) return;

        // Filter results for "Single" category
        const singleProgramStudents = results.filter(
            (result) => result.category?.toUpperCase() === 'SINGLE'
        );

        const studentPoints = {};

        singleProgramStudents.forEach((result) => {
            const studentName = result.studentName?.toUpperCase() || 'UNKNOWN';
            const teamName = result.teamName?.toUpperCase() || 'UNKNOWN';
            const points = parseInt(result.points, 10) || 0;

            const studentId = `${studentName}-${teamName}`;
            if (!studentPoints[studentId]) {
                studentPoints[studentId] = {
                    studentName,
                    teamName,
                    totalPoints: 0,
                };
            }

            studentPoints[studentId].totalPoints += points;
        });

        // Sort students by total points in descending order
        const sortedStudents = Object.values(studentPoints).sort(
            (a, b) => b.totalPoints - a.totalPoints
        );

        // Update top students
        setTopStudents(sortedStudents.slice(0, 3));
    }, [results]);

    return (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg text-center text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">Star of the Fest</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            <th className="px-4 py-2 border-b">Rank</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Team</th>
                            <th className="px-4 py-2 border-b">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topStudents.map((student, index) => (
                            <tr
                                key={`${student.studentName}-${student.teamName}`}
                                className={`${
                                    index === 0
                                        ? 'bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-yellow-900 font-bold shadow-lg rounded-lg'
                                        : 'odd:bg-gray-100 dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-600'
                                } hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}
                            >
                                <td className="px-4 py-4 border-b">{index + 1}</td>
                                <td className="px-4 py-4 border-b">{student.studentName}</td>
                                <td className="px-4 py-4 border-b">{student.teamName}</td>
                                <td className="px-4 py-4 border-b">{student.totalPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopStudents;
