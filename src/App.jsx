import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Item from './components/item'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



export default function App() {

return (<>
<NavBar/>
<ItemListContainer greeting="Bienvenido a Florida Shopping Car"/>
</>)
}
