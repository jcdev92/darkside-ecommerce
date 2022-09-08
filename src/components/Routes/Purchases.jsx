import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import CardPurchases from '../Purchases/CardPurchases'
import '../../css/purchases.css'



const Purchases = () => {

  const [purchases, setPurchases] = useState()
  
  useEffect(()=>{
    const url ="https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios.get(url,getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  },[])

  // console.log(purchases)

  return (
    <section>
      <div className="empty__box"></div>
      <h1>Purchases</h1>
      <div className='purchases__cont purchase'>
        {
          purchases?.map(purchase => (

            <CardPurchases key={purchase.id} purchase={purchase}/>

          ))
        }
      </div>
    </section>
  )
}

export default Purchases