import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import './index.css'
import App from './App.jsx'
import { Movieprovider } from './components/context/moviecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movieprovider>
    <BrowserRouter>
    <Navbar/>
    <App />
    </BrowserRouter>
    </Movieprovider>
  </StrictMode>,
)
