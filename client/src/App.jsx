import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import ResultPage from "./Components/Result/ResultPage";
import NavBar from "./Components/NavBar/NavBar";
import CursorAnimation from "./Components/corsor/CursorAnimation";
import ScoreTable from './Pages/ScoreTable/ScoreTable';
import AddResult from './Pages/AddResult/AddResult';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <CursorAnimation />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path="/scoretable" element={<ScoreTable />} />
          <Route path='/addresult' element={<AddResult />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
