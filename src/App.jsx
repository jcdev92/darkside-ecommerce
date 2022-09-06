import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProducDetail from './components/Routes/ProducDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'

function App() {

// useEffect(()=>{
//   let url = "https://ecommerce-api-react.herokuapp.com/api/v1/users"
  
//   const obj={
//     firstName: "Se",
//     lastName: "Bastian",
//     email: "qwesadzxcvbn123452@gmail.com",
//     password: "123456",
//     phone: "1234567891",
//     role: "admin"
//   } 
  
//   axios.post(url,obj)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))
// },[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProducDetail />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
      <footer className="home__footer"></footer>
    </div>
  )
}

export default App
