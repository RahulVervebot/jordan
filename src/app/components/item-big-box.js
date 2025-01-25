import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./item-big-box.module.css";

const ItemBigBox = memo(({ className = "" }) => {
  return (
    <div className={[styles.itemBigBox, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src="/bg-10.svg" />
      <img className={styles.imageIcon} alt="" src="/image-10@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.timerParent}>
          <div className={styles.timer}>
            <div className={styles.bg} />
            <img className={styles.clockIcon} alt="" src="/clock.svg" />
            <div className={styles.d24h45m20sWrapper}>
              <div className={styles.d24h}>5D : 24H : 45M : 20S</div>
            </div>
          </div>
          <div className={styles.discountWrapper}>
            <div className={styles.discount}>
              <div className={styles.discountChild} />
              <div className={styles.discountPercentage}>-15%</div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.nestedContentParent}>
            <div className={styles.nestedContent}>
              <div className={styles.doubleNestedContent}>
                <div className={styles.title}>
                  Logitech G733 Lightspeed Wireless Gaming Headset 
                </div>
              </div>
              <div className={styles.contentDescription}>
                <div className={styles.div}>$127.99</div>
                <div className={styles.div1}>$149.99</div>
              </div>
            </div>
            <div className={styles.title1}>
              Total freedom with up to 20 meter wireless range and Lightspeed
              wireless audio transmission. Keep playing for up to....
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.btnWrapper}>
              <div className={styles.btn}>
                <div className={styles.rectangle} />
                <div className={styles.addToCart}>Add to Cart</div>
                <img
                  className={styles.cartOutlineIcon}
                  alt=""
                  src="/cartoutline-10.svg"
                />
              </div>
            </div>
            <div className={styles.interactiveIcons}>
              <img className={styles.heartIcon} alt="" src="/heart-10.svg" />
            </div>
            <div className={styles.interactiveIcons1}>
              <img
                className={styles.exchangeIcon}
                alt=""
                src="/exchange-10@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ItemBigBox.propTypes = {
  className: PropTypes.string,
};

export default ItemBigBox;
