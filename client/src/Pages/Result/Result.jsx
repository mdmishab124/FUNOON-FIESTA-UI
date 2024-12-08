import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../../Components/Search/SearchPage';
import ResultPage from '../../Components/Search/ResultPage';
const Result = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Result
