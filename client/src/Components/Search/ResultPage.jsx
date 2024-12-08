import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useResults } from "../../../context/ResultsContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Medal1 from "../../assets/img/medal1.png";
import Medal2 from "../../assets/img/medal2.png";
import Medal3 from "../../assets/img/medal3.png";
import PosterImage from '../../assets/img/poster.jpeg';

const ResultPage = () => {
    const { id } = useParams();
    const { results } = useResults();
    const [programData, setProgramData] = useState([]);

    useEffect(() => {
        const fetchProgramData = () => {
            const filteredResults = results.filter(
                (result) => result.programName.toUpperCase() === id.toUpperCase()
            );
            setProgramData(filteredResults);
        };
        fetchProgramData();
    }, [id, results]);

    const getMedalImage = (prize) => {
        switch (prize) {
            case "First":
                return Medal1;
            case "Second":
                return Medal3;
            case "Third":
                return Medal2;
            default:
                return Medal1;
        }
    };

    if (!programData.length) {
        return <div className="text-center mt-14">No results found for this program.</div>;
    }

    return (
        <div className="flex justify-center items-center flex-col mt-14 px-4">
            <div className="bg-gray-400 px-8 py-2 rounded-full -mb-6 z-10 font-semibold text-2xl">
                <h1>{id}</h1>
            </div>
            <div className="bg-secondary w-full h-auto py-8 md:rounded-[61px] flex flex-col gap-8 mt-10 items-center">
                <div className="w-full flex flex-wrap gap-8">
                    {programData.map((data) => {
                        return (
                            <div
                                key={data._id}
                                className={`flex flex-col items-center justify-between w-full md:w-1/2 md:flex-row-reverse px-4`}
                            >
                                <div className="flex items-center justify-center flex-col md:flex-row">
                                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 p-2">
                                        <img
                                            src={getMedalImage(data.prize)}
                                            alt="Medal"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="ml-4 text-center md:text-left">
                                        <h1 className="text-xl font-semibold">{data.studentName}</h1>
                                        {data.teamName && <h2 className="text-lg text-gray-600">{data.teamName}</h2>}
                                    </div>
                                </div>
                            </div>
                        );

                    })}
                </div>
            </div>

            <div className="w-full bg-gray-100 py-8 mt-8">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
                    <h2 className="text-2xl text-center font-semibold mb-6">{id}</h2>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-50"
                        style={{ backgroundImage: `url(${PosterImage})` }}
                    ></div>

                    <div className="flex flex-col gap-6 relative z-10">
                        {programData.map((data) => {
                            return (
                                <div key={data._id} className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 p-2">
                                        <img
                                            src={getMedalImage(data.prize)}
                                            alt="Medal"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col text-start ml-3 md:text-left">
                                        <h1 className="text-xl font-semibold">{data.studentName}</h1>
                                        {data.category === "Single" && <h2 className="text-lg text-gray-600">{data.place}</h2>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <a
                        href={PosterImage}
                        download={`${id}-Poster.jpg`}
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Download Poster
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
