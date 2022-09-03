import React from 'react'

const CardHome = ({product}) => {

  console.log(product)
  return (
    <article clasName="card__home">
      <header className="card__home ch__header">
        <img src={product.productImgs[0]} alt={product.title} />
      </header>
      <div className="card__home ch__body">
        <h3></h3>
        <section className="ch__body ch__body-product">
          <h4 className=""></h4>
          <span className=""></span>
        </section>
        <button className="card__home ch__button"></button>
      </div>

      
    </article>
  )
}

export default CardHome