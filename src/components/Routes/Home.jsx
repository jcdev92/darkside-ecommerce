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
    <div className="home">
      <h1>Home</h1>
      <div className="home__container-card">
        {
          products?.map(product => (
            <CardHome key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home