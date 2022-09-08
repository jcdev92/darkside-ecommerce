import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckLogin = () => {

    const navigate = useNavigate()

    const handledLogout = () =>{
        localStorage.removeItem("token")
        navigate(`/`)
    }

    return (
        <article className='login__form'>
            <h1>Login</h1>
            <h2>Successfully</h2>
            {/* icono de check */}
            {/* icono de usuario */}
            <div className='form__cont__btn'>
                <button className="form__button" onClick={handledLogout}>Logout</button>
            </div>
        </article>
    )
}

export default CheckLogin