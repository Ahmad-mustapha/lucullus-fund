import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Strategy } from './pages/import'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Strategy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App