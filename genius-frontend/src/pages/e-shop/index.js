import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Card from "../../components/productCard";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Eshop = () => {
  const [filter, setFilter] = useState();
  const [isSelect, setIsSelect] = useState();
  const [isClick, setIsClick] = useState(false);
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let data;
    try {
      data = await axios.get("http://localhost:3002/api/products");
    } catch (err) {
      console.log(err);
    }
    if (data) setProducts(data.data.product);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Banner style={{ position: "fixed" }} />
      <Navbar pageActive={"e-shop"} style={{ position: "fixed" }} />
      <div className="e-shop_container">
        <div className="filter_container">
          <ul>
            <li>
              <p>Categories</p>
              <ul>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Bags</button>
                </li>
                <li>
                  <button>Clothings</button>
                </li>
              </ul>
            </li>
            <li>
              <p>Colors</p>
              <ul>
                <li>
                  <button>Purple</button>
                </li>
                <li>
                  <button>Black</button>
                </li>
                <li>
                  <button>Red</button>
                </li>
                <li>
                  <button>Yellow</button>
                </li>
                <li>
                  <button>Blue</button>
                </li>
              </ul>
            </li>
            <li>
              <p>Sizes</p>
              <ul>
                <li>
                  <button>XS</button>
                </li>
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
                <li>
                  <button>XL</button>
                </li>
                <li>
                  <button>XXL</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="product-container">
          {products &&
            products.map((e, i) => {
              return <Card key={i} product={e} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Eshop;
