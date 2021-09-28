import { Dropdown, Button, Menu, message } from "antd";
import {
  DownOutlined,
  LikeOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";

import classes from "./MyDropDown.module.css";

const MyDropDown = () => {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e.domEvent.innerHTML);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<LikeOutlined />}>
        popülerite (azalan)
      </Menu.Item>
      <Menu.Item key="2" icon={<UpCircleOutlined />}>
        fiyat (artan)
      </Menu.Item>
      <Menu.Item key="3" icon={<DownCircleOutlined />}>
        fiyat (azalan)
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={classes.myDropDown}>
      <Dropdown overlay={menu}>
        <Button>
          Sorted By <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default MyDropDown;
