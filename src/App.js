import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import ItemListContainer from './container/ItemListContainer';
// import ItemCard from './container/ItemCard'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer nombre='nombre'/>
    </div>
  );
}

export default App;
