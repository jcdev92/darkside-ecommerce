import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProducDetail from './components/Routes/ProducDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'

function App() {
<<<<<<< HEAD
=======
  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const obj = {
  //     firstName : "Rick",
  //     lastName : "Sanchez",
  //     email : "rick@genius.com",
  //     password : "pass123456",
  //     phone : "1234567891",
  //     role: "admin"
  //   }

  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])
>>>>>>> 5fc994b9c40b9731c37217ca8d7da9598385a443

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProducDetail />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
      <footer className="home__footer"></footer>
    </div>
  )
}

export default App
