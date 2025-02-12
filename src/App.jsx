import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Strategy } from './pages/import'

const App = () => {
  const [ showContactUs, setShowContactUs ] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home showContactUs={showContactUs} setShowContactUs={setShowContactUs} />} />
        <Route path='/strategy' element={<Strategy showContactUs={showContactUs} setShowContactUs={setShowContactUs} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App