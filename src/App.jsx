import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Routes>
      <Route path='/signup' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element = {<Home />} />
     </Routes>
    </>
  )
}

export default App
