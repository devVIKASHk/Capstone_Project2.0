

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalContext } from './Components/component/globalContext/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
      <StrictMode>
      <App />
    </StrictMode>
  </GlobalContext>
)
