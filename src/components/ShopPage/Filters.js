import { Checkbox } from "antd";
import classes from "./Filters.module.css";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const mockOptions = ["All", "Jackets", "Fleece", "Sweaters"];

const Filters = (props) => {
  return (
    <div className={classes.filters}>
      <span className={classes.title}>
        <h2>Filters</h2>

        <a>clear filters</a>
      </span>
      <Checkbox.Group
        mode="horizontal"
        onChange={onChange}
        options={mockOptions}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Checkbox
      </Checkbox.Group>
    </div>
  );
};

export default Filters;
