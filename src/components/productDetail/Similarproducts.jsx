import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CardHome from '../home/CardHome'

const Similarproducts = ({productInfo}) => {
    console.log(productInfo);

    const [filterProducts, setfilterProducts] = useState()

    const products = useSelector(state => state.products)
    
    useEffect(() => {
        if(productInfo){
          const filter = products.filter(e => e.category.name === productInfo.category)
          setfilterProducts(filter)
        }
      }, [productInfo])

   return (
    <div className='similar__products'>
        <h3>Similar Products</h3>
    <div className='similar__products__cont'>
      {
        filterProducts?.map(product => {
          if(product.title !== productInfo.title){
            return <CardHome 
              key={product.id}
              product={product}
            />
          }
        })
      }
    </div>
    </div>
  )
}

export default Similarproducts