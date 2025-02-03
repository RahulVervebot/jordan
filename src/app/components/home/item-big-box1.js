import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./item-big-box1.module.css";

const ItemBigBox1 = memo(({ className = "" }) => {
  return (
    <div className={[styles.itemBigBox, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src="/bg-10.svg" />
      <div className={styles.content}>
        <div className={styles.nestedInstanceContentParent}>
          <div className={styles.nestedInstanceContent}>
            <div className={styles.doubleNestedInstance}>
              <div className={styles.title}>
                ROCCAT Vulcan 121 Mechanical PC Tactile Gaming Keyboard
              </div>
            </div>
            <div className={styles.instanceContentDescription}>
              <div className={styles.div}>$43.99</div>
              <div className={styles.div1}>$88.99</div>
            </div>
          </div>
          <div className={styles.title1}>
            Designed and built entirely by ROCCAT engineers and developed for
            gamers who love the feel of mechanical switches...
          </div>
        </div>
        <div className={styles.cartButtonParent}>
          <div className={styles.cartButton}>
            <div className={styles.btn}>
              <div className={styles.cartButtonBackground} />
              <div className={styles.addToCart}>Add to Cart</div>
              <img
                className={styles.cartOutlineIcon}
                alt=""
                src="/cartoutline-10.svg"
              />
            </div>
          </div>
          <div className={styles.instanceInteractiveIcons}>
            <img className={styles.heartIcon} alt="" src="/heart-10.svg" />
          </div>
          <div className={styles.instanceInteractiveIcons1}>
            <img
              className={styles.exchangeIcon}
              alt=""
              src="/exchange-10@2x.png"
            />
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="/image-11@2x.png" />
      <div className={styles.timer}>
        <div className={styles.bg} />
        <img className={styles.clockIcon} alt="" src="/clock.svg" />
        <div className={styles.d24h45m20sWrapper}>
          <div className={styles.d24h}>5D : 24H : 45M : 20S</div>
        </div>
      </div>
      <div className={styles.discount}>
        <div className={styles.discountChild} />
        <div className={styles.discountPercentage}>-53%</div>
      </div>
    </div>
  );
});

ItemBigBox1.propTypes = {
  className: PropTypes.string,
};

export default ItemBigBox1;
