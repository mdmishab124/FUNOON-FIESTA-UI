import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResults } from "../../../context/ResultsContext";

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { results } = useResults();

    // Convert all program names to uppercase and remove duplicates
    const uniqueResults = results.reduce((acc, current) => {
        const programNameUpper = current.programName.toUpperCase();
        if (!acc.some((item) => item.programName === programNameUpper)) {
            acc.push({ ...current, programName: programNameUpper });
        }
        return acc;
    }, []);

    // Filter results based on uppercase search input
    const filteredResults = uniqueResults.filter((result) =>
        result.programName.includes(search.toUpperCase())
    );

    return (
        <div className="relative overflow-x-hidden  text-gray-900 dark:text-gray-100    min-h-screen">
            <div className="relative flex flex-col items-center justify-center p-10">
                <div className="font-bold text-center text-4xl p-10">
                    Get Your Results
                </div>
                <div className="flex justify-center flex-col items-center mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Search Program"
                        className="w-full border-2 max-w-[700px] h-10 px-6 rounded-full focus:outline-none mb-10 md:mb-18 min-w-[300px] focus:shadow-lg transition duration-300 ease-in-out  text-gray-900 dark:text-gray-100"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="flex justify-center items-center gap-4 p-1 w-full flex-wrap">
                        {filteredResults.map((result) => (
                            <div
                                key={result._id}
                                className="border-2 border-gray-300 dark:border-gray-600 min-w-72 text-center px-4 md:px-6 py-2 md:py-1 rounded-2xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 w-fit  text-gray-900 dark:text-gray-100"
                                onClick={() => navigate(`/result/${result.programName}`)}
                                >
                                <p className="text-sm sm:text-lg font-medium whitespace-nowrap">
                                    {result.programName}
                                </p>
                            </div>
                        ))}
                        {filteredResults.length === 0 && (
                            <div className="text-rose-500 font-semibold">
                                No search results found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
