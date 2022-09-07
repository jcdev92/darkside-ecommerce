import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCartPlus} from 'react-icons/bs'

const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleButton = (e) => {
    e.stopPropagation()
    navigate(`/cart`)
    // add to cart
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
          <h4 className="">
            Price
          </h4>
          <span className="">
            {product.price}
          </span>
        </section>
        <div className="box__button">
          <button onClick={handleButton} className="card__button"><BsCartPlus className="cart__icon"/></button>
        </div>
      </div>

      
    </article>
  )
}

export default CardHome