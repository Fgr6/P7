import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Login from './pages/login'
import Insc from './pages/insc'
import Actu from './pages/Actu'
import ActuForm from './pages/ActuForm'
import Footer from './components/Footer/footer'
import ModifForm from './pages/ModifForm'


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
      <Route path="ModifForm/:id" element={<ModifForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

