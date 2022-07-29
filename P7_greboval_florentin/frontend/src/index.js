import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Login from './pages/login'
import Insc from './pages/insc'
import Footer from './components/Footer/footer'
import Actu from './pages/Actu'
import ActuForm from './pages/ActuForm'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/Insc" element={<Insc />} />
      <Route path="/Actu" element={<Actu />} />
      <Route path="ActuForm" element={<ActuForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
