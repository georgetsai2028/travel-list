import { useState } from 'react'
import './App.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true},
  { id: 2, description: "Socks", quantity: 8, packed: false},
  { id: 3, description: "Charger", quantity: 1, packed: true},
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

  function handleSubmit(e){
    e.preventDefault();
  }

  
  return (
    <form className = "add-form" onSubmit={handleSubmit}>
      <h3>What do you need to bring? 🧳 </h3>
      <select>
        {Array.from({length: 20}, (_, i) => i + 1).map
        ((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type ="text" placeholder='item'></input>
      <burron>Add</burron>
    </form>
  )
}

function Logo(){
  return <h1>🏝️Travel List🤑</h1>
}

function PackingList(){

  return (
  <div className='list'>
   <ul> 
  {initialItems.map((item)=> 
  (<Item item={item} key={item.id} />
  ))} 
  </ul>
</div>
  );}

function Item({item}){
  return(
  <li>
    <span style={item.packed ? {textDecoration: 'line-through'} : {}}> {item.quantity} {item.description}</span>
    <button>❌</button>
  </li>

  )

}

function Stats(){
  return <footer className='stats'> <em>You have X items on your list and already packed X % </em> </footer>
}

export default App
