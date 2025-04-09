import { useState } from 'react'
import './App.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false},
  { id: 2, description: "Socks", quantity: 12, packed: false},
];

function App() {

  
  return (
    <>
    <Logo />
    <Form/>
    <PackingList />
    <Stats />
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

  return (
  <div className='list'>
   <ul> 
  {initialItems.map((item)=> (<Item item={item} />
  ))} 
  </ul>
</div>
  );}
function Item({item}){
  return <li>{item.description}</li>

}
function Stats(){
  return <footer className='stats'> <em>You have X items on your list and already packed X % </em> </footer>
}

export default App
