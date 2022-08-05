import './App.css';


import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



import { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Category from './components/CategoryCard/Category';
import CartContextProvider from './context/CartContextProvider.js';
import Cart from './components/Cart/Cart';

function App() {
  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Container>
            <Routes>
              <Route index path='/' element={<ItemListContainer />} />
              <Route index path='/Categoria/:categoryId' element={<ItemListContainer />} />
              <Route path='/detalle/:productId' element={
                <Suspense fallback={<h1>Cargando...</h1>}>
                  <ItemDetailContainer />
                </Suspense>}
              />
              <Route path='/Cart' element={
                <Suspense fallback={<h1>Cargando...</h1>}>
                  <Cart />
                </Suspense>}
              />
              <Route path='/Categorias' element={<Category />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Container>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
