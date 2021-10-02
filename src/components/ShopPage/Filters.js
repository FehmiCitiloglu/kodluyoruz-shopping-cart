import { Checkbox, Button } from "antd";
import classes from "./Filters.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/products";

const Filters = ({ categories }) => {
  const [toggleChecked, setToggleChecked] = useState(false);

  const dispatch = useDispatch();
  const onChange = (e) => {
    console.log(`checked = ${e}`);
    dispatch(productActions.filterProducts(e));
  };

  const clearFilterHandle = (e) => {
    setToggleChecked(() => !e.target.checked);
  };

  return (
    <div>
      <span>
        <h2>Filters</h2>

        <p bordered={false} block onClick={clearFilterHandle}>
          clear filters
        </p>
      </span>

      <Checkbox.Group
        mode="horizontal"
        onChange={onChange}
        options={categories}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      />
    </div>
  );
};

export default Filters;
