import React from 'react'

const CardPurchases = ({ purchase }) => {
    console.log(purchase)
    return (
        <article>
            <div>
                <h4>{purchase.updatedAt}</h4>
            </div>
            <ul>

                {
                    purchase.cart.products.map(product => (
                        <li key={product.id}>
                            <h5>{product.title}</h5>
                            <span>{product.productsInCart.quantity}</span>
                            <span>{product.price}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default CardPurchases