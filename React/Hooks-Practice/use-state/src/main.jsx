import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Api from './practice/Api.jsx'
import Des from './des.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api />
  </StrictMode>,
)
