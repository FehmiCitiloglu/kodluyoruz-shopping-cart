import { Row, Col, Button, Rate } from "antd";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <div className={classes["product-detail"]}>
      <Row gutter={30} justify="center">
        <Col md={12}>
          <div className={classes.deneme1}>
            <img src="https://via.placeholder.com/542" alt="" />
          </div>
        </Col>
        <Col md={12}>
          <div className={classes.deneme2}>
            <h2>Mens winter jacket</h2>
            <div className={classes.price}>
              <strong>$ 99</strong>
              <div>
                <p>4.3</p>
                <Rate />
              </div>
            </div>
            <p>132 değerlendirme</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              cum iure ducimus enim eveniet, repellat, illum deserunt nobis
              voluptates reprehenderit debitis iste, officia minus eum?
            </p>
            <Row>
              <Col md={14}>
                <Button
                  block
                  style={{
                    background: "black",
                    color: "wheat",
                  }}
                >
                  Add to Cart
                </Button>
              </Col>

              <Col
                md={4}
                style={{
                  border: "1px solid gray",
                  textAlign: "center",
                  float: "right",
                  background: "#E5E5E5",
                  marginLeft: "20px",
                }}
              >
                <div className={classes.quantity}>
                  <Button>-</Button>2<Button>+ </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetail;
