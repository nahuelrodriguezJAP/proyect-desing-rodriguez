import './App.css';


import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container>
          <Routes>
            <Route index path='/' element={<ItemListContainer nombre='Vengo desde App.js' />} />
            <Route path='/detalle/:productId' element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ItemDetailContainer />
              </Suspense>}
            />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
