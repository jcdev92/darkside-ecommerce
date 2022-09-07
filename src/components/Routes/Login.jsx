import React from 'react'
import CheckLogin from '../Login/CheckLogin'
import FormLogin from '../Login/FormLogin'

const Login = () => {

  const token = localStorage.getItem("token")

  return (
    <section className='login'>
      <div className="empty__box"></div>
      <div className='login_cont'>
        {
        token ? <CheckLogin/> : <FormLogin />    
        }
      </div>
    </section>
  )
}

export default Login