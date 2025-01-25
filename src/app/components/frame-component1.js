import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = memo(({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.nestedShippingMaskParent}>
          <div className={styles.nestedShippingMask}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <div className={styles.shippingOptions}>
            <b className={styles.freeShipping}>Free Shipping</b>
            <div className={styles.onAllOrders}>
              On all orders! All over India
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nestedShippingMask}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className={styles.shippingOptions}>
            <b className={styles.paymentSecure}>Payment Secure</b>
            <div className={styles.onAllOrders}>Got 100% Payent Safe</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nestedShippingMask}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-2@2x.png"
            />
          </div>
          <div className={styles.shippingOptions}>
            <b className={styles.paymentSecure}>100% Money Back</b>
            <div className={styles.onAllOrders}>Customer Money Back</div>
          </div>
        </div>
        <div className={styles.nestedShippingMaskParent}>
          <div className={styles.nestedShippingMask}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-3@2x.png"
            />
          </div>
          <div className={styles.shippingOptions}>
            <b className={styles.support247}>Support 24/7</b>
            <div className={styles.onAllOrders}>Top quality 24/7 support</div>
          </div>
        </div>
      </div>
    </div>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
