import classes from "./Shop.module.css";
import { Row, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import MyDropDown from "./MyDropDown";

import Filters from "./Filters";
import ProductCard from "./ProductCard";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.npoint.io/3a5ea76fb9a0acf96d50/products"
      );
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const loadMoreHandler = () => {
    setProductsPerPage((prevState) => prevState + 3);
  };
  let categories = [];
  products.map((product) => {
    console.log("mapli products", product.category);
    categories.push(product.category);
  });
  categories = [...new Set(categories)];

  // console.log("shop current products", currentProducts);
  return (
    <div className={classes.shop}>
      <div>
        <Filters className={classes.filters} categories={categories} />
      </div>
      <div className={classes.dropdown}>
        <MyDropDown />
      </div>
      <Row gutter={[48, 48]} className={classes.contents}>
        <ProductCard products={currentProducts} loading={loading} />
      </Row>
      <Button className={classes.moreLoad} onClick={loadMoreHandler}>
        Load more product
      </Button>
    </div>
  );
};

export default Shop;
