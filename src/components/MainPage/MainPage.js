import "antd/dist/antd.css";
import "./MainPage.css";

import { Layout, Button } from "antd";

const { Content, Footer } = Layout;

const MainPage = (props) => {
  return (
    <Layout className="layout">
      <Content className="site-layout">
        <h1>Better Clothing for the planet</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam odit
          reprehenderit debitis ut autem tempore esse. Asperiores temporibus
          ullam quibusdam.
        </p>
        <Button>Shop All</Button>
        <img src="https://via.placeholder.com/950x350" alt="" />
      </Content>
      <Footer style={{ textAlign: "center", background: "#e5e5e5" }}></Footer>
    </Layout>
  );
};

export default MainPage;
