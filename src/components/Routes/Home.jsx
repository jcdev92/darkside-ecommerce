import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../Home/CardHome'
import SearchProductHome from '../Home/SearchProductHome'
import SelectProduct from '../Home/SelectProduct'
import Cart from '../shared/Cart'

const Home = ({products}) => {
  
  const [selectProduct, setSelectProduct] = useState()
  const [nameProduct, setNameProduct] = useState("")

  return (
    <section className="home">
      <div className="empty__box"></div>
      <div className="home__container">
        <aside className="home side__bar">
          <SelectProduct selectProduct={selectProduct} setSelectProduct={setSelectProduct} products={products}/>
        </aside>
        <div className="home home__products">
          <div className="home search__bar">
            <SearchProductHome setNameProduct={setNameProduct} setSelectProduct={setSelectProduct} />
          </div>
          <div className="home cards__container">
            {
              products?.map(product => {
                //by  Category
                if (selectProduct) {

                  if (product.category.name == selectProduct) {

                    return <CardHome key={product.id} product={product} />

                  } else if (selectProduct == "All") {

                    return <CardHome nameProduct={nameProduct} key={product.id} product={product} />

                  }
                }else if(nameProduct != ""){

                  if(product.title.toLowerCase().includes(`${nameProduct}`)){

                    return(<CardHome nameProduct={nameProduct} key={product.id}  product={product} />)

                  }else{

                    return <br />  
                  }

                } else {

                  return <CardHome nameProduct={nameProduct} key={product.id} product={product} />

                }
              })
            }
          </div>
        </div>
      </div>

      <br /><br /><br /><br /><br />
      {/* <Cart/> */}
    </section>
  )
}

export default Home