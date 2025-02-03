import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./item-option.module.css";

const ItemOption = memo(
  ({
    className = "",
    itemOption2Height,
    bG,
    footerArea,
    heart,
    exchange,
    cartOutline,
    contentAlignItems,
    frameDivJustifyContent,
    image,
    imageIconMixBlendMode,
    frameDivJustifyContent1,
    title,
    frameDivJustifyContent2,
    prop,
  }) => {
    const itemOption2Style = useMemo(() => {
      return {
        height: itemOption2Height,
      };
    }, [itemOption2Height]);

    const contentStyle = useMemo(() => {
      return {
        alignItems: contentAlignItems,
      };
    }, [contentAlignItems]);

    const frameDivStyle = useMemo(() => {
      return {
        justifyContent: frameDivJustifyContent,
      };
    }, [frameDivJustifyContent]);

    const imageIconStyle = useMemo(() => {
      return {
        mixBlendMode: imageIconMixBlendMode,
      };
    }, [imageIconMixBlendMode]);

    const frameDiv1Style = useMemo(() => {
      return {
        justifyContent: frameDivJustifyContent1,
      };
    }, [frameDivJustifyContent1]);

    const frameDiv2Style = useMemo(() => {
      return {
        justifyContent: frameDivJustifyContent2,
      };
    }, [frameDivJustifyContent2]);

    return (
      <div
        className={[styles.itemOption2, className].join(" ")}
        style={itemOption2Style}
      >
        <img className={styles.bgIcon} alt="" src={bG} />
        <div className={styles.footer}>
          <img className={styles.footerAreaIcon} alt="" src={footerArea} />
          <div className={styles.heartWrapper}>
            <img className={styles.heartIcon} alt="" src={heart} />
          </div>
          <div className={styles.exchangeWrapper}>
            <img className={styles.exchangeIcon} alt="" src={exchange} />
          </div>
          <div className={styles.btn}>
            <div className={styles.rectangle} />
            <div className={styles.addToCart}>Add to Cart</div>
            <img className={styles.cartOutlineIcon} alt="" src={cartOutline} />
          </div>
        </div>
        <div className={styles.content} style={contentStyle}>
          <div className={styles.imageWrapper} style={frameDivStyle}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src={image}
              style={imageIconStyle}
            />
          </div>
          <div className={styles.titleWrapper} style={frameDiv1Style}>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.ratingWrapper} style={frameDiv2Style}>
            <div className={styles.rating}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon} alt="" src="/star-1.svg" />
              <img className={styles.starIcon} alt="" src="/star-2.svg" />
              <img className={styles.starIcon} alt="" src="/star-3.svg" />
              <img className={styles.starIcon} alt="" src="/star-4.svg" />
            </div>
          </div>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    );
  }
);

ItemOption.propTypes = {
  className: PropTypes.string,
  bG: PropTypes.string,
  footerArea: PropTypes.string,
  heart: PropTypes.string,
  exchange: PropTypes.string,
  cartOutline: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  itemOption2Height: PropTypes.string,
  contentAlignItems: PropTypes.string,
  frameDivJustifyContent: PropTypes.string,
  imageIconMixBlendMode: PropTypes.string,
  frameDivJustifyContent1: PropTypes.string,
  frameDivJustifyContent2: PropTypes.string,
};

export default ItemOption;
