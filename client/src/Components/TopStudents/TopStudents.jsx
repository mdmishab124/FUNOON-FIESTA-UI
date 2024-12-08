import { useEffect, useState } from 'react';
import { useResults } from '../../../context/ResultsContext';

const TopStudents = () => {
    const { results } = useResults();
    const [topStudents, setTopStudents] = useState([]);

    useEffect(() => {
        const singleProgramStudents = results.filter(result => result.category === 'Single');

        const studentPoints = {};

        singleProgramStudents.forEach(result => {
            const studentId = `${result.studentName.toUpperCase()}-${result.teamName.toUpperCase()}`;
            if (!studentPoints[studentId]) {
                studentPoints[studentId] = {
                    studentName: result.studentName.toUpperCase(),
                    teamName: result.teamName.toUpperCase(),
                    totalPoints: 0,
                };
            }

            studentPoints[studentId].totalPoints += parseInt(result.points, 10);
        });

        const sortedStudents = Object.values(studentPoints).sort((a, b) => b.totalPoints - a.totalPoints);

        setTopStudents(sortedStudents.slice(0, 3));
    }, [results]);

    return (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg text-center text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                                className={`${index === 0
                                    ? 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 text-yellow-900 font-bold shadow-lg rounded-lg'
                                    : 'odd:bg-gray-100 dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-600'
                                    } hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}>
                                <td className="px-4 py-4 border-b flex items-center gap-2">
                                    {index + 1}
                                </td>
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
