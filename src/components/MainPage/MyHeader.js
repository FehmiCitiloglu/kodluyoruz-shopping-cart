import { Layout, Menu, Input, AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./MyHeader.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

// values to compare with input value
const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const MyHeader = () => {
  return (
    <Header className="my-header">
      <Menu
        theme="compact"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="navbar"
      >
        <Menu.Item key="1" style={{ fontWeight: "bold" }}>
          <Link to="/">E-commerce</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/stories">Stories</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <span style={{ display: "flex", flexDirectin: "row" }}>
        <SearchOutlined
          style={{
            position: "relative",
            top: "25px",
            left: "-2px",
            zIndex: "2",
          }}
        />
        <Input placeholder="Search" bordered={false} allowClear />
      </span>

      <hr />
    </Header>
  );
};

export default MyHeader;
