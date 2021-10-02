import classes from "./Shop.module.css";
import { Row, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import MyDropDown from "./MyDropDown";

import Filters from "./Filters";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";

import { fetchProductData } from "../../store/product-actions";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prod.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const filteredProducts = useSelector((state) => state.prod.filteredProducts);
  const isFiltered = useSelector((state) => state.prod.isFiltered);
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
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  // let categories = [];

  // products.map((product) => {
  //   categories.push(product.category);
  // });
  // categories = [...new Set(categories)];

  // console.log("shop current products", currentProducts);
  return (
    <div className={classes.shop}>
      <div>
        <Filters className={classes.filters} />
      </div>
      <div className={classes.dropdown}>
        <MyDropDown />
      </div>
      <Row gutter={[48, 48]} className={classes.contents}>
        <ProductCard
          products={!isFiltered ? currentProducts : filteredProducts}
        />
      </Row>
      <Button className={classes.moreLoad} onClick={loadMoreHandler}>
        Load more product
      </Button>
    </div>
  );
};

export default Shop;
