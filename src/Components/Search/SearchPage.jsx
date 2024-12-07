import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import dummyPrograms from '../data/dummyPrograms'; // Move the dummy data to a separate file
const dummyPrograms = [
    { id: 1, Name: "Program 1", Category: "Category 1", Stage: "Stage 1", Records: 10 },
    { id: 2, Name: "Program 2", Category: "Category 2", Stage: "Stage 2", Records: 15 },
    { id: 3, Name: "Program 3", Category: "Category 3", Stage: "Stage 3", Records: 20 },
    { id: 1, Name: "Program 1", Category: "Category 1", Stage: "Stage 1", Records: 10 },
    { id: 2, Name: "Program 2", Category: "Category 2", Stage: "Stage 2", Records: 15 },
    { id: 3, Name: "Program 3", Category: "Category 3", Stage: "Stage 3", Records: 20 },
    { id: 1, Name: "Program 1", Category: "Category 1", Stage: "Stage 1", Records: 10 },
    { id: 2, Name: "Program 2", Category: "Category 2", Stage: "Stage 2", Records: 15 },
    { id: 3, Name: "Program 3", Category: "Category 3", Stage: "Stage 3", Records: 20 },
    // Add more dummy data as needed
  ];
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center p-10">
        <div className="font-bold text-center text-4xl p-10">Get Your Results</div>
        <div className="flex justify-center flex-col items-center mx-auto w-full">
          <input
            type="text"
            placeholder="Search Program"
            className="w-full border-2 max-w-[700px] h-10 px-6 rounded-full focus:outline-none mb-10 md:mb-18 min-w-[300px] focus:shadow-lg transition duration-300 ease-in-out"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex justify-center items-center gap-4 p-1 w-full flex-wrap">
            {dummyPrograms.filter((val) => {
              if (search === "") {
                return val;
              } else if (val.Name.toLowerCase().includes(search.toLowerCase())) {
                return val;
              }
            }).map((item, index) => (
              <div
                key={index}
                className="border-2 min-w-72 text-center px-4 md:px-6 py-2 md:py-1 rounded-2xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 w-fit"
                onClick={() => navigate(`/result/${item.id}`)}
              >
                <p className="text-sm sm:text-lg font-medium whitespace-nowrap">{item.Name}</p>
              </div>
            ))}
            {dummyPrograms.filter((val) => val.Name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
              <div className="text-rose-500 font-semibold">No search results found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
