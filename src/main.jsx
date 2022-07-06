import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ContextProvider} from './asideAndModalContext'

import './styles/reset.css'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    
  </React.StrictMode>
)
