import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice' 
import CardHome from '../Home/CardHome'

const Home = () => {


  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <section className="home">
      <div className="empty__box"></div>
      <div className="home__container">
        <aside className="home side__bar"></aside>
        <div className="home home__products">
          <div className="home search__bar"></div>
          <div className="home cards__container">
            {
              products?.map(product => (
                <CardHome key={product.id} product={product}/>
                ))
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home