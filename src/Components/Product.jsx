import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Product.css";

const Product = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }

  useEffect(() => {
    getData();
    console.log("data_fetched", data);
  }, []);

  return (
    <div>
      <div className="productContainer">
        {data.map((e) => (
          <div key={e.id}>
            <div className="card_sub_container">
              <img src={e.image_link} alt="" />
              <h5>{e.name}</h5>
              <div>
                <p>{`$ ${e.price}`}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;