import { memo } from "react";
import ItemBigBox from "./item-big-box";
import ItemBigBox1 from "./item-big-box1";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = memo(({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.weeklyDealParent}>
        <h2 className={styles.weeklyDeal}>Weekly Deal</h2>
        <div className={styles.nestedWeeklyProductWrapper}>
          <div className={styles.nestedWeeklyProduct}>
            <ItemBigBox />
            <ItemBigBox1 />
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
