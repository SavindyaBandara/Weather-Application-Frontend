import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Main from './components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login />} />
        <Route exact path='/main' element={<Main />} />
        
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
