import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./item-big-box-pictures1.module.css";

const ItemBigBoxPictures1 = memo(({ className = "" }) => {
  return (
    <div className={[styles.itemBigBoxPictures, className].join(" ")}>
      <div className={styles.productPictureContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.imageIcon} alt="" src="/image-17@2x.png" />
        </div>
        <div className={styles.productInfoContainer}>
          <div className={styles.productInfoWrapper}>
            <div className={styles.timer}>
              <div className={styles.bg} />
              <img className={styles.clockIcon} alt="" src="/clock.svg" />
              <div className={styles.d24h45m20sWrapper}>
                <div className={styles.d24h}>5D : 24H : 45M : 20S</div>
              </div>
            </div>
            <div className={styles.productDiscountWrapper}>
              <div className={styles.discount}>
                <div className={styles.discountBackground} />
                <div className={styles.percentOff}>-27%</div>
              </div>
            </div>
          </div>
          <div className={styles.productDetailsAndActions}>
            <img className={styles.bgIcon} alt="" src="/bg-12.svg" />
            <div className={styles.content}>
              <div className={styles.detailsAndActionsContainer}>
                <div className={styles.detailsAndActionsWrapper}>
                  <div className={styles.itemTitleContainer}>
                    <div className={styles.title}>
                      ASUS ROG Spatha X Wireless Gaming Mouse
                    </div>
                  </div>
                  <div className={styles.priceContainer}>
                    <div className={styles.oldPrice}>$79.80</div>
                    <div className={styles.newPrice}>$120.99</div>
                  </div>
                </div>
                <div className={styles.title1}>
                  Dual-mode Connectivity - ROG Spatha X Wireless Gaming Mouse
                  allows you play wirelessly with 2.4 GHzRF, or with a...
                </div>
              </div>
              <div className={styles.buttonsWrapper}>
                <div className={styles.cartButtonContainer}>
                  <div className={styles.btn}>
                    <div className={styles.buttonBackground} />
                    <div className={styles.addToCart}>Add to Cart</div>
                    <img
                      className={styles.cartOutlineIcon}
                      alt=""
                      src="/cartoutline-10.svg"
                    />
                  </div>
                </div>
                <div className={styles.actionButtons}>
                  <img
                    className={styles.heartIcon}
                    alt=""
                    src="/heart-12.svg"
                  />
                </div>
                <div className={styles.actionButtons1}>
                  <img
                    className={styles.exchangeIcon}
                    alt=""
                    src="/exchange-12@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productImageGallery}>
        <div className={styles.gallery}>
          <img className={styles.imageIcon1} alt="" src="/image-18@2x.png" />
          <img className={styles.imageIcon2} alt="" src="/image-19@2x.png" />
          <img className={styles.imageIcon3} alt="" src="/image-20@2x.png" />
          <img className={styles.imageIcon4} alt="" src="/image-21@2x.png" />
          <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </div>
  );
});

ItemBigBoxPictures1.propTypes = {
  className: PropTypes.string,
};

export default ItemBigBoxPictures1;
