import React from "react"
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import SearchPage from "./Components/Search/SearchPage";
import ResultPage from "./Components/Search/ResultPage";
import NavBar from "./Components/NavBar/NavBar";
import AnimatedCursor from "react-animated-cursor"
import CursorAnimation from "./Components/corsor/CursorAnimation";

function App(url) {
  return (
    <>
      <BrowserRouter>
      <CursorAnimation />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
