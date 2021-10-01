import { Col } from "antd";

import MyRate from "./MyRate";
import { Link } from "react-router-dom";

const ProductCard = ({ products, loading }) => {
  products.map((product) => {
    // console.log("product cart logu", product);
    // console.log("product cart id", product.id);
    console.log(product.category);
  });
  let filteredProducts = products.filter((category) => category === "jewelery");
  console.log(filteredProducts);

  return (
    <>
      {products.map((product) => (
        <Col key={product.id} span={8}>
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt=""
              style={{
                width: 160,
                height: 160,
              }}
            />
            <div>
              <h2>{product.title.slice(0, 20)}...</h2>
              <h5>${product.price}</h5>
              <span style={{ display: "inline" }}>
                <MyRate
                  rate={product.rating.rate}
                  rateCount={product.rating.count}
                />
              </span>
            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default ProductCard;
