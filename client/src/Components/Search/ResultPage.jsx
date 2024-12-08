import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useResults } from "../../../context/ResultsContext";
import html2canvas from "html2canvas";
import Medal1 from "../../assets/img/medal1.png";
import Medal2 from "../../assets/img/medal2.png";
import Medal3 from "../../assets/img/medal3.png";
import PosterImage from "../../assets/img/poster.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResultPage = () => {
    const { id } = useParams();
    const { results } = useResults();
    const [programData, setProgramData] = useState([]);
    const posterRef = useRef();

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

    const handleDownloadPoster = async () => {
        if (posterRef.current) {
            const canvas = await html2canvas(posterRef.current, {
                backgroundColor: null, // Make the canvas background transparent
            });

            const image = canvas.toDataURL("image/png");

            // Create a link and download the image
            const link = document.createElement("a");
            link.href = image;
            link.download = `${id}-Poster.png`;
            link.click();
        }
    };

    if (!programData.length) {
        return <div className="text-center mt-14">No results found for this program.</div>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col mt-10 items-center text-gray-900 min-h-screen">
            {/* Program Header */}
            <div className="bg-gray-400 px-8 py-2 rounded-full -mb-6 z-10 font-semibold text-2xl">
                <h1>{id}</h1>
            </div>

            {/* Results Section */}
            <div className="text-white w-full h-auto py-8 md:rounded-[61px] flex flex-col gap-8 mt-1 items-center px-4">
                <div className="w-full flex flex-wrap gap-8">
                    {programData.map((data) => (
                        <div
                            key={data._id}
                            className="flex flex-col items-center justify-between w-full md:w-1/2 md:flex-row-reverse px-4"
                        >
                            <div className="flex items-center justify-center flex-col md:flex-row">
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 p-2">
                                    <img
                                        src={getMedalImage(data.prize)}
                                        alt="Medal"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="bg-gray-600 p-5 rounded-3xl mt-3 ml-4 md:ml-8 text-center md:text-left">
                                    <h1 className="text-xl font-semibold">{data.studentName}</h1>
                                    {data.category === "Single" && (
                                        <h2 className="text-lg text-gray-400">{data.teamName}</h2>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="w-full py-8 mt-8 px-4 sm:px-8 lg:px-16 text-white">
                <div className="max-w-2xl mx-auto">
                    <Slider {...sliderSettings}>
                        {[...Array(3)].map((_, index) => (
                            <div key={index}>
                                <div
                                    ref={posterRef}
                                    className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] bg-white rounded-lg shadow-md p-6 relative mx-auto"
                                    style={{
                                        backgroundImage: `url(${PosterImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <h2 className="text-2xl text-center font-semibold mb-6 relative z-10">{id}</h2>
                                    <div className="flex flex-col gap-6 relative z-10">
                                        {programData.map((data) => (
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
                                                    {data.category === "Single" && (
                                                        <h2 className="text-lg text-gray-600">{data.teamName}</h2>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="mt-6 text-center">
                <button
                    onClick={handleDownloadPoster}
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                    Download Poster
                </button>
            </div>
        </div>
    );
};

export default ResultPage;
