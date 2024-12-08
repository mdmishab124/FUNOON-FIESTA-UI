import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import SearchPage from "./Components/Search/SearchPage";
import ResultPage from "./Components/Search/ResultPage";
import NavBar from "./Components/NavBar/NavBar";
import CursorAnimation from "./Components/corsor/CursorAnimation";
import AddResultForm from "./Components/AddResultForm/AddResultForm";
import Cart from "./Components/Cart/Cart";
import ScoreTable from './Pages/ScoreTable/ScoreTable';

function App() {
  return (
    <>
      <BrowserRouter>
        <CursorAnimation />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/scoretable" element={<ScoreTable />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path='/addresult' element={<AddResultForm />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
