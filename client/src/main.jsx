import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResultsProvider } from '../context/ResultsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResultsProvider>
    <App />
  </ResultsProvider>

)
