import { Checkbox } from "antd";
import classes from "./Filters.module.css";

const Filters = ({ categories }) => {
  const onChange = (e) => {
    console.log(`checked = ${e}`);
  };

  return (
    <div>
      <span>
        <h2>Filters</h2>

        <a href="/">clear filters</a>
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
