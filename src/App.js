import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import React from 'react';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
// import ItemCard from './container/ItemCard'

function App() {
  return (
    <div className="App">
     <NavBar/><div class="container">
     <ItemListContainer nombre='Vengo desde App.js'/>
     </div>
    </div>
  );
}

export default App;
