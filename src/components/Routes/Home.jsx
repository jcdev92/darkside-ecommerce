import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from "../Home/CardHome";
import FilterPrice from "../Home/FilterPrice";
import SearchProductHome from "../Home/SearchProductHome";
import SelectProduct from "../Home/SelectProduct";
import Cart from "../shared/Cart";

const Home = ({ products }) => {
  const [selectProduct, setSelectProduct] = useState();
  const [nameProduct, setNameProduct] = useState("");
  const [objFilterPrice, setObjFilterPrice] = useState({});
  const [price, setPrice] = useState();

  // Filter by Price

  useEffect(() => {
    const filter = products?.filter((e) => {
      const price = Number(e.price);
      const min = objFilterPrice.from;
      const max = objFilterPrice.to;
      if (min && max) {
        return price >= min && price <= max;
      } else if (min && !max) {
        return price >= min;
      } else if (max && !min) {
        return price <= max;
      } else {
        return true;
      }
    });
    setPrice(filter);
  }, [objFilterPrice.to, objFilterPrice.from]);

  return (
    <section className="home">
      <div className="empty__box"></div>
      <div className="home__container">
        <aside className="home side__bar">
          <SelectProduct
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
            products={products}
            setPrice={setPrice}
          />
          <FilterPrice setObjFilterPrice={setObjFilterPrice} />
        </aside>
        <div className="home home__products">
          <div className="home search__bar">
            <SearchProductHome
              setNameProduct={setNameProduct}
              setSelectProduct={setSelectProduct}
              setPrice={setPrice}
            />
          </div>
          <div className="home cards__container">
            {price
              ? price?.map((e) => <CardHome key={e.id} product={e} />)
              : products?.map((product) => {
                //by  Category
                if (selectProduct) {
              
                if (product.category.name == selectProduct) {
                  
                  return <CardHome key={product.id} product={product} />
                  
                } else if (selectProduct == "All") {
                  
                  return <CardHome nameProduct={nameProduct} key={product.id} product={product} />
                  
                }
              } else if(nameProduct != ""){
                
                if (product.title.toLowerCase().includes(`${nameProduct}`)) {
                  
                  return(<CardHome nameProduct={nameProduct} key={product.id}  product={product} />)
                  
                } else {
                  
                  return <br />  
                  
                }
                
              } else {
                
                return <CardHome nameProduct={nameProduct} key={product.id} product={product} />
                
              }
              })}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Cart/> */}
    </section>
  );
};

export default Home;

