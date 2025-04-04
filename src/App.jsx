import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
    <Logo />
    </>
  )
}

function Form(){
  return (
    <div className = "add-form">
      <h3>What do you need to bring? 🧳 </h3>
    </div>
  )
}

function Logo(){
  return <h1>🏝️Travel List🤑</h1>
}

function PackingList(){
  return <div className='list'> List </div>
}

function Stats(){
  return <footer> You have X items on your list and already packed X %</footer>
}

export default App
