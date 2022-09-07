import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProducDetail from './components/Routes/ProducDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/product/:id" element={<ProducDetail />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
      <footer className="home__footer"></footer>
    </div>
  )
}

export default App
