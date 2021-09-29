import { Button, Input, Row, Col } from "antd";
import classes from "./CartPage.module.css";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const CartPage = (props) => {
  return (
    <div className={classes["cart-page"]}>
      <div>
        <h2>Your Cart</h2>
        <Link to="./shop">Nor ready to checkout? Countinue Shopping</Link>
        <CartProduct />
      </div>
      <div className={classes.summary}>
        <h5>Order Summary</h5>
        <Input
          className={classes.coupon}
          placeholder="Enter coupon code here"
          allowClear
        />
        <div className={classes.order}>
          <div>
            <div>
              <p>SubTotal</p>
              <p>$ 200</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>Calculated at the next step</p>
            </div>
            <hr />
            <div>
              <p>Total</p> <p>$ 200</p>
            </div>
          </div>
        </div>
        <Button>Continue to checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
