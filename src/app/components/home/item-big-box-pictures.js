import { memo } from "react";
import PropTypes from "prop-types";
import "./item-big-box-pictures.css";

const ItemBigBoxPictures = memo(({ className = "" }) => {
  return (
    <div className={`item-big-box-pictures ${className}`}>
      <img className="bg-icon3" alt="" src="/bg-12.svg" />
      <div className="content3">
        <div className="product-details-container">
          <div className="product-details-wrapper">
            <div className="product-title-container">
              <div className="title5">
                DUMOS Ergonomic Computer Gaming Chair 
              </div>
            </div>
            <div className="product-price-wrapper">
              <div className="original-price">$341.00</div>
              <div className="discounted-price">$450.99</div>
            </div>
          </div>
          <div className="title6">
            This computer gaming chair can adjust height, rocking mode, and
            adjust armrests. When your neck is sore from long hours...
          </div>
        </div>
        <div className="product-actions">
          <div className="add-to-cart-button-wrapper">
            <div className="btn3">
              <div className="add-to-cart-button-background" />
              <div className="add-to-cart3">Add to Cart</div>
              <img
                className="cart-outline-icon3"
                alt=""
                src="/cartoutline-10.svg"
              />
            </div>
          </div>
          <div className="action-icons">
            <img className="heart-icon3" alt="" src="/heart-12.svg" />
          </div>
          <div className="action-icons1">
            <img className="exchange-icon3" alt="" src="/exchange-12@2x.png" />
          </div>
        </div>
      </div>
      <img className="image-icon3" alt="" src="/image-12@2x.png" />
      <div className="timer2">
        <div className="bg2" />
        <img className="clock-icon2" alt="" src="/clock.svg" />
        <div className="d-24h-45m-20s-frame">
          <div className="d-24h2">5D : 24H : 45M : 20S</div>
        </div>
      </div>
      <div className="discount2">
        <div className="discount-shape" />
        <div className="div5">-27%</div>
      </div>
      <div className="gallery">
        <img className="image-icon4" alt="" src="/image-13@2x.png" />
        <img className="image-icon4" alt="" src="/image-14@2x.png" />
        <img className="image-icon4" alt="" src="/image-15@2x.png" />
        <img className="image-icon4" alt="" src="/image-16@2x.png" />
      </div>
      <img className="arrow-icon2" alt="" src="/arrow-1.svg" />
    </div>
  );
});

ItemBigBoxPictures.propTypes = {
  className: PropTypes.string,
};

export default ItemBigBoxPictures;
