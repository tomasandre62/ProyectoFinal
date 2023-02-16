import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Random from './Random'
import Categorias from './Categorias'
import Home from './Home'
import Usuarios from './usuarios'




const App = () => {
  return (
    <Routes>
      <Route path='/Categorias' element={<Categorias />} />
      <Route path='/Todos' element={<Random />}></Route>
      <Route path='/Usuarios' element={<Usuarios />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
