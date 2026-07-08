import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Bet from './Bet.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Bet/> */}
  </StrictMode>,
)
