import classes from "./CartPage.module.css";

const CartProduct = (props) => {
  return (
    <div>
      <div className={classes.products}>
        <img src="https://via.placeholder.com/133" alt="" />
        <div className={classes.productInfo}>
          <h3>Men's winter jacket</h3>
          <p>Size: L</p>
          <p>Quantity: 1</p>
          <h3>$ 99</h3>
        </div>
      </div>
      <hr />
      <div className={classes.products}>
        <img src="https://via.placeholder.com/133" alt="" />
        <div className={classes.productInfo}>
          <h3>Men's winter jacket</h3>
          <p>Size: L</p>
          <p>Quantity: 1</p>
          <h3>$ 99</h3>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
