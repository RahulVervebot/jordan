import { memo } from "react";
import Products from "./products";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = memo(({ className = "" }) => {
  return (
    <section className={[styles.productOptionsWrapper, className].join(" ")}>
      <div className={styles.productOptions}>
        <div className={styles.smallBanner}>
          <div className={styles.wrapperBg}>
            <img className={styles.bgIcon} alt="" src="/bg-14@2x.png" />
          </div>
          <div className={styles.content}>
            <h1 className={styles.specialOffers}>Special offers</h1>
            <div className={styles.upTo50Container}>
              <span>{`up to `}</span>
              <span className={styles.span}>
                <span className={styles.span1}>50%</span>
                <span>{` `}</span>
              </span>
              <span>
                <span>off</span>
              </span>
            </div>
          </div>
          <div className={styles.timerWrapper}>
            <h2 className={styles.hurryUpOffers}>Hurry up! Offers end in</h2>
            <div className={styles.timerContentWrapper}>
              <div className={styles.timerContent}>
                <div className={styles.digitsWrapper}>
                  <div className={styles.digits}>
                    <div className={styles.div} />
                    <div className={styles.placeholder}>7</div>
                  </div>
                  <div className={styles.digits1}>
                    <b className={styles.b}>:</b>
                  </div>
                  <div className={styles.digits2}>
                    <div className={styles.div} />
                    <div className={styles.div2}>10</div>
                  </div>
                  <div className={styles.digits1}>
                    <b className={styles.b}>:</b>
                  </div>
                  <div className={styles.digits4}>
                    <div className={styles.div} />
                    <div className={styles.div2}>12</div>
                  </div>
                  <div className={styles.digits1}>
                    <b className={styles.b}>:</b>
                  </div>
                  <div className={styles.digits4}>
                    <div className={styles.div} />
                    <div className={styles.div2}>47</div>
                  </div>
                </div>
                <div className={styles.valueWrapper}>
                  <div className={styles.value}>
                    <div className={styles.days}>days</div>
                    <div className={styles.days}>Hours</div>
                    <div className={styles.days}>Minutes</div>
                    <div className={styles.days}>Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products />
        <Products />
      </div>
    </section>
  );
});

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
