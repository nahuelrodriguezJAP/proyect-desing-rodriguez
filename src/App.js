import './App.css';


import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Category from './components/CategoryCard/Category';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container>
          <Routes>
            <Route index path='/' element={<ItemListContainer/>} />
            <Route index path='/Categoria/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detalle/:productId' element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ItemDetailContainer />
              </Suspense>}
            />
            <Route path='/Categorias' element={<Category/>}/>
            <Route path='*' element={<Navigate to='/'/> }/>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
