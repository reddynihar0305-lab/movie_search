import './App.css'
import Moviecard from './components/moviecard'
import Home from './pages/home'
import Fav from './pages/fav'
import { Routes,Route } from 'react-router-dom'
function App() {
     
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>
    </>
  ) 
}

export default App
