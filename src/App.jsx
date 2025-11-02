import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ItemDetailContainer from './components/ItemDatilContainer/ItemDetailContainer'
import './App.css'
import './index.css'
import Item from './components/Item'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router';
import cartContext, { CartProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer';
import app, { getProducts } from './data/firebase';

//1. BrowserRouter como componente Padre
//2. Definir el area donde vamos a navegar con <Routes>
//3. Crear rutas con <Route>: definiendo el path (url) y el contenido
export default function App() {
    getProducts();
    
// Para gregar quitar y mostrar productos del carrito "CartContext"
//1. Crear un context
//2. Definir un <Provider> y darle un value
//3. "Consumir" el context
return (
<CartProvider>
<BrowserRouter>
<NavBar/>
<Routes>
    <Route path="/" element={<ItemListContainer greeting="Bienvenido a Florida Shopping Car"/>}/>
    <Route path="/category/:categParam" element={ <ItemListContainer/>}/>
    <Route path="/detalle/:idParam" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<CartContainer/>}/>
    <Route path="*" element={<h1>404: Página no encontrada</h1>}/>
</Routes>
</BrowserRouter>
</CartProvider>
)
}
