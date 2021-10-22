import { Checkbox, Button } from "antd";

import { useDispatch } from "react-redux";
import { productActions } from "../../store/products";
import { fetchProductData } from "../../store/product-actions";

const Filters = ({ categories }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    console.log(`checked = ${e}`);

    dispatch(productActions.filterProducts(e));
  };

  const clearFilterHandle = (e) => {
    dispatch(fetchProductData());
  };

  return (
    <div>
      <span>
        <h2>Filters</h2>

        <Button block onClick={clearFilterHandle}>
          clear filters
        </Button>
      </span>

      <Checkbox.Group
        mode="horizontal"
        onChange={onChange}
        options={categories}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {console.log(categories.checked)}
      </Checkbox.Group>
    </div>
  );
};

export default Filters;
