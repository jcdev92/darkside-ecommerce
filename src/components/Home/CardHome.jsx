import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  console.log(product)
  return (
    <article onClick={handleClick}>
      <header className="card__home ch__header">
        <img src={product.productImgs[0]} alt={product.title} />
      </header>
      <div className="card__home ch__body">
        <h3>
          {product.title}
        </h3>
        <section className="ch__body ch__body-product">
          <h4 className="">
            Price
          </h4>
          <span className="">
            {product.price}
          </span>
        </section>
        <button className="card__home ch__button">See More</button>
      </div>

      
    </article>
  )
}

export default CardHome