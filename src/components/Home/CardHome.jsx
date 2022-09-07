import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCartPlus} from 'react-icons/bs'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

    // add to cart
  const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      navigate(`/cart`)
  }
  
  return (
    <article className="card" onClick={handleClick}>
      <header className="card__header">
        <img src={product.productImgs[0]} alt={product.title}/>
      </header>
      <div className="card__body">
        <h3>
          {product.title}
        </h3>
        <section className="card__body card__body--product">
          <div className="price__box">
            <h4 className="">
              Price
            </h4>
            <span className="">
              {product.price}
            </span>
          </div>
          <div className="box__button">
          <button onClick={handleAddCart} className="card__button"><BsCartPlus className="cart__icon"/></button>
          </div>
        </section>

      </div>

      
    </article>
  )
}

export default CardHome