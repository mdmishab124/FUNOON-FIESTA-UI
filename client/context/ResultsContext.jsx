import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ResultsContext = createContext();
export const API_URL = "http://localhost:3005/api/result";

export const ResultsProvider = ({ children }) => {
    const [results, setResults] = useState([]); // All results
    const [uniqueTeams, setUniqueTeams] = useState([]); // Unique team names
    const [uniquePrograms, setUniquePrograms] = useState([]); // General programs
    const [groupPrograms, setGroupPrograms] = useState([]); // Group programs
    const [singlePrograms, setSinglePrograms] = useState([]); // Single programs
    const [topSingleParticipants, setTopSingleParticipants] = useState([]); // Top single participants

    // Fetch results from the server
    const fetchResults = async () => {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;

            setResults(data); // Update results

            // Extract unique team names
            const teams = [...new Set(data.map((result) => result.teamName.toUpperCase()))];
            setUniqueTeams(teams);

            // Categorize programs
            const programs = [...new Set(data.map((result) => result.programName.toUpperCase()))];

            const groupPrograms = programs.filter((program) =>
                data.some(
                    (result) =>
                        result.programName.toUpperCase() === program &&
                        result.category.toUpperCase() === "GROUP"
                )
            );

            const singlePrograms = programs.filter((program) =>
                data.some(
                    (result) =>
                        result.programName.toUpperCase() === program &&
                        result.category.toUpperCase() === "SINGLE"
                )
            );

            const generalPrograms = programs.filter(
                (program) =>
                    !groupPrograms.includes(program) && !singlePrograms.includes(program)
            );

            setUniquePrograms(generalPrograms);
            setGroupPrograms(groupPrograms);
            setSinglePrograms(singlePrograms);

            // Extract top 3 single participants
            const topParticipants = data
                .filter((result) => result.category.toUpperCase() === "SINGLE")
                .sort((a, b) => b.points - a.points) // Sort by points (descending)
                .slice(0, 3); // Take top 3

            setTopSingleParticipants(topParticipants);
        } catch (error) {
            console.error("Error fetching results:", error);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    // Delete a result by ID
    const deleteResult = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setResults((prevResults) => prevResults.filter((result) => result._id !== id));
        } catch (error) {
            console.error("Error deleting result:", error);
        }
    };

    // Edit a result by ID
    const editResult = async (id, updatedData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedData);
            setResults((prevResults) =>
                prevResults.map((result) => (result._id === id ? response.data : result))
            );
        } catch (error) {
            console.error("Error editing result:", error);
        }
    };

    return (
        <ResultsContext.Provider
            value={{
                API_URL,
                results,
                uniqueTeams,
                uniquePrograms,
                groupPrograms,
                singlePrograms,
                topSingleParticipants,
                deleteResult,
                editResult,
                fetchResults
            }}
        >
            {children}
        </ResultsContext.Provider>
    );
};

export const useResults = () => useContext(ResultsContext);