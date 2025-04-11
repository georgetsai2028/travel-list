import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FlashCard from './FlashCard.jsx'
import App from './App.jsx'
import PlayerStats from './PlayerStats.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerStats />
  </StrictMode>,
)
