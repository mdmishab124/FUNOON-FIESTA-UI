// App.jsx
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../context/AuthContext'; 
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import ResultPage from "./Components/Result/ResultPage";
import NavBar from "./Components/NavBar/NavBar";
import CursorAnimation from "./Components/corsor/CursorAnimation";
import ScoreTable from './Pages/ScoreTable/ScoreTable';
import AddResult from './Pages/AddResult/AddResult';
import CartPage from './Pages/CartPage/CartPage';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <CursorAnimation />
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path="/result/:id" element={<ResultPage />} />
        <Route path="/scoretable" element={<ScoreTable />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/addresult' element={<AddResult />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
