import classes from "./Shop.module.css";
import { Row, Col, Button } from "antd";

import MyDropDown from "./MyDropDown";
import MyRate from "./MyRate";
import Filters from "./Filters";

const Shop = (props) => {
  return (
    <div className={classes.shop}>
      <div>
        <Filters className={classes.filters} />
      </div>
      <div className={classes.dropdown}>
        <MyDropDown />
      </div>
      <Row gutter={[48, 48]} className={classes.contents}>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>
            <span style={{ display: "inline" }}>
              <MyRate />
            </span>
          </div>
        </Col>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>
            <MyRate />
          </div>
        </Col>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>
            <MyRate />
          </div>
        </Col>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>
            <MyRate />
          </div>
        </Col>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>
            <MyRate />
          </div>
        </Col>
        <Col span={8}>
          <img src="https://via.placeholder.com/160" alt="" />
          <div>
            <h2>Jean</h2>
            <h5>$150</h5>

            <MyRate />
          </div>
        </Col>
      </Row>
      <Button className={classes.moreLoad}>Load more product</Button>
    </div>
  );
};

export default Shop;
