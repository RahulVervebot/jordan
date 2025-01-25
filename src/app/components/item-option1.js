import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./item-option1.module.css";

const ItemOption1 = memo(
  ({
    className = "",
    itemOption1Height,
    itemOption1Position,
    itemOption1Top,
    itemOption1Left,
    bG,
    bGIconTransform,
    contentAlignItems,
    productImageJustifyContent,
    image,
    imageIconMixBlendMode,
    productTitleJustifyContent,
    title,
    ratingJustifyContent,
    placeholder,
  }) => {
    const itemOption1Style = useMemo(() => {
      return {
        height: itemOption1Height,
        position: itemOption1Position,
        top: itemOption1Top,
        left: itemOption1Left,
      };
    }, [
      itemOption1Height,
      itemOption1Position,
      itemOption1Top,
      itemOption1Left,
    ]);

    const bGIconStyle = useMemo(() => {
      return {
        transform: bGIconTransform,
      };
    }, [bGIconTransform]);

    const content1Style = useMemo(() => {
      return {
        alignItems: contentAlignItems,
      };
    }, [contentAlignItems]);

    const productImageStyle = useMemo(() => {
      return {
        justifyContent: productImageJustifyContent,
      };
    }, [productImageJustifyContent]);

    const imageIcon1Style = useMemo(() => {
      return {
        mixBlendMode: imageIconMixBlendMode,
      };
    }, [imageIconMixBlendMode]);

    const productTitleStyle = useMemo(() => {
      return {
        justifyContent: productTitleJustifyContent,
      };
    }, [productTitleJustifyContent]);

    const ratingStyle = useMemo(() => {
      return {
        justifyContent: ratingJustifyContent,
      };
    }, [ratingJustifyContent]);

    return (
      <div
        className={[styles.itemOption1, className].join(" ")}
        style={itemOption1Style}
      >
        <img className={styles.bgIcon} alt="" src={bG} style={bGIconStyle} />
        <div className={styles.content} style={content1Style}>
          <div className={styles.productImage} style={productImageStyle}>
            <img
              className={styles.imageIcon}
              alt=""
              src={image}
              style={imageIcon1Style}
            />
          </div>
          <div className={styles.productTitle} style={productTitleStyle}>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.rating} style={ratingStyle}>
            <div className={styles.rating1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon} alt="" src="/star-1.svg" />
              <img className={styles.starIcon} alt="" src="/star-2.svg" />
              <img className={styles.starIcon} alt="" src="/star-3.svg" />
              <img className={styles.starIcon} alt="" src="/star-4.svg" />
            </div>
          </div>
          <div className={styles.placeholder}>{placeholder}</div>
        </div>
      </div>
    );
  }
);

ItemOption1.propTypes = {
  className: PropTypes.string,
  bG: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  itemOption1Height: PropTypes.string,
  itemOption1Position: PropTypes.string,
  itemOption1Top: PropTypes.string,
  itemOption1Left: PropTypes.string,
  bGIconTransform: PropTypes.string,
  contentAlignItems: PropTypes.string,
  productImageJustifyContent: PropTypes.string,
  imageIconMixBlendMode: PropTypes.string,
  productTitleJustifyContent: PropTypes.string,
  ratingJustifyContent: PropTypes.string,
};

export default ItemOption1;
