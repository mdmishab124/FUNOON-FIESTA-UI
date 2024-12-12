import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResultsProvider } from '../context/ResultsContext.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ResultsProvider>
      <App />
    </ResultsProvider>
  </AuthProvider>
)
