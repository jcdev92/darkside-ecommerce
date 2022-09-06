import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleButton = () => {
    navigate(`/cart`)
    // add to cart
  }
  
  return (
    <article className="card">
      <header className="card__header" onClick={handleClick}>
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
        <button onClick={handleButton} className="card__button">See More</button>
      </div>

      
    </article>
  )
}

export default CardHome