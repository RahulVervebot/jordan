import { memo } from "react";
import ItemOption1 from "./item-option1";
import PropTypes from "prop-types";
import styles from "./products.module.css";

const Products = memo(({ className = "" }) => {
  return (
    <div className={[styles.products, className].join(" ")}>
      <ItemOption1
        bG="/bg-15.svg"
        image="/image-221@2x.png"
        title="SteelSeries Arctis Nova"
        placeholder="$38.80"
      />
    </div>
  );
});

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
