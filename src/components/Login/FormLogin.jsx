import axios from 'axios'
import React from 'react'
import '../../css/login.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {


   const {register, handleSubmit, reset} = useForm()
   const navigate = useNavigate()

    const submit = (data) => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                navigate("/")
            })
            .catch(err => console.log(err))
            reset(
                {
                    email: '',
                    password: ''
                }
                
        )
    }

  return (
    <form className='login__form' onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <h2>
            Welcome! Enter your email address and password to login
        </h2>
        <div className="form__group">
            <label className="form__label" htmlFor="email">Email</label>
            <input {...register('email')} className="form__input" type="email" name="email" id="email" placeholder="Email"/>
        </div>
        <div className="form__group">
            <label className="form__label" htmlFor="password">Password</label>
            <input {...register('password')} className="form__input" type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div className='form__cont__btn'>
            <button className="form__button" type="submit">Login</button>
        </div>
    </form>
  )
}

export default FormLogin