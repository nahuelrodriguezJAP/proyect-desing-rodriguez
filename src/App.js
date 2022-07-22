import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
            <Route index path='/' element={<ItemListContainer nombre='Vengo desde App.js' />} />
            <Route path='/detalle/:productId' element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ItemDetailContainer />
              </Suspense>}
            />
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>

      </div>
    </BrowserRouter>  
  );
}

export default App;
