'use client';

import { memo } from "react";
import PropTypes from "prop-types";
import ItemOption1 from "./item-option1";

const FrameComponent6 = memo(({ className = "" }) => {
  return (
    <>
      <section className={`contentParent ${className}`}>
        <div className="content">
          <div className="header">
            <div className="bg" />
            <div className="bestSellerTitleParent">
              <div className="bestSellerTitle">
                <h2 className="bestSeller">Best Seller</h2>
              </div>
              <div className="buttonShort">
                <a className="viewMore">View More</a>
              </div>
            </div>
            <div className="productOptions">
              <div className="products">
                <div className="items">
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-24@2x.png"
                      />
                      <div className="title8">UPS LEGEND 650 UPS</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$49.99</div>
                    </div>
                  </div>
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-25@2x.png"
                      />
                      <div className="title8"> component</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$17.99</div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content3">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-26@2x.png"
                      />
                      <div className="title8">ASUS Vivobook 15.6”</div>
                      <div className="ratingWrapper">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$257.39</div>
                    </div>
                  </div>
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content3">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-27@2x.png"
                      />
                      <div className="title8">TP-Link Tapo MagCam</div>
                      <div className="ratingWrapper">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$$109.99</div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content3">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-28@2x.png"
                      />
                      <div className="title8">Amazon Fire Max 11</div>
                      <div className="ratingWrapper">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$184.99</div>
                    </div>
                  </div>
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content3">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-29@2x.png"
                      />
                      <div className="title8">WOLT Backpack</div>
                      <div className="ratingWrapper">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$137.99</div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-30@2x.png"
                      />
                      <div className="title8">Projector Screen</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$99.99</div>
                    </div>
                  </div>
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-311@2x.png"
                      />
                      <div className="title8">Computer periferal</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$74.99</div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-30@2x.png"
                      />
                      <div className="title8">Projector Screen</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$99.99</div>
                    </div>
                  </div>
                  <div className="itemOption1">
                    <div className="wrapperBg">
                      <img className="bgIcon" alt="" src="/bg-17.svg" />
                    </div>
                    <div className="content1">
                      <img
                        className="imageIcon"
                        alt=""
                        src="/image-311@2x.png"
                      />
                      <div className="title8">Computer periferal</div>
                      <div className="rating">
                        <div className="rating1">
                          <img className="starIcon" alt="" src="/star.svg" />
                          <img className="starIcon" alt="" src="/star-1.svg" />
                          <img className="starIcon" alt="" src="/star-2.svg" />
                          <img className="starIcon" alt="" src="/star-3.svg" />
                          <img className="starIcon" alt="" src="/star-4.svg" />
                        </div>
                      </div>
                      <div className="placeholder">$74.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recentProducts">
            <div className="recentView">
              <div className="bg1" />
              <div className="div" />
              <div className="recentWrapper">
                <div className="recentHeader">
                  <div className="recentTitleWrapper">
                    <img className="arrowIcon" alt="" src="/arrow-3@2x.png" />
                    <div className="youRecentlyWatchedWrapper">
                      <h2 className="bestSeller">You Recently Watched</h2>
                    </div>
                  </div>
                  <div className="wrapperArrow">
                    <img className="arrowIcon1" alt="" src="/arrow-4.svg" />
                  </div>
                </div>
                <div className="recentSubtitle">
                  <div className="getAllThe">Get all the items you want</div>
                </div>
              </div>
              <div className="recentlyViewedProducts">
                <div className="recentProductCards">
                  <ItemOption1
                    itemOption1Height="308px"
                    itemOption1Position="relative"
                    itemOption1Top="unset"
                    itemOption1Left="unset"
                    bG="/bg-27.svg"
                    bGIconTransform="scale(1.282)"
                    contentAlignItems="flex-start"
                    productImageJustifyContent="flex-start"
                    image="/image-34@2x.png"
                    imageIconMixBlendMode="darken"
                    productTitleJustifyContent="flex-start"
                    title="HP Chromebook 11-inch"
                    ratingJustifyContent="flex-start"
                    placeholder="$218.00"
                  />
                  <div className="recentCardItems">
                    <div className="active" />
                    <ItemOption1
                      itemOption1Height="308px"
                      itemOption1Position="absolute"
                      itemOption1Top="0px"
                      itemOption1Left="0px"
                      bG="/bg-28.svg"
                      bGIconTransform="scale(1.282)"
                      contentAlignItems="flex-end"
                      productImageJustifyContent="flex-end"
                      image="/image-35@2x.png"
                      imageIconMixBlendMode="unset"
                      productTitleJustifyContent="flex-end"
                      title="2021 iMac All in one "
                      ratingJustifyContent="flex-end"
                      placeholder="$1049.00"
                    />
                  </div>
                  <div className="recentCardItems1">
                    <div className="div1" />
                    <div className="div2" />
                    <ItemOption1
                      itemOption1Height="308px"
                      itemOption1Position="relative"
                      itemOption1Top="unset"
                      itemOption1Left="unset"
                      bG="/bg-28.svg"
                      bGIconTransform="scale(1.282)"
                      contentAlignItems="flex-end"
                      productImageJustifyContent="flex-end"
                      image="/image-36@2x.png"
                      imageIconMixBlendMode="unset"
                      productTitleJustifyContent="flex-end"
                      title="ASUS TUF Gaming A15"
                      ratingJustifyContent="flex-end"
                      placeholder="$1195.99"
                    />
                  </div>
                  <ItemOption1
                    itemOption1Height="308px"
                    itemOption1Position="relative"
                    itemOption1Top="unset"
                    itemOption1Left="unset"
                    bG="/bg-28.svg"
                    bGIconTransform="scale(1.282)"
                    contentAlignItems="flex-start"
                    productImageJustifyContent="flex-start"
                    image="/image-37@2x.png"
                    imageIconMixBlendMode="darken"
                    productTitleJustifyContent="flex-start"
                    title="HP 14 Laptop"
                    ratingJustifyContent="flex-start"
                    placeholder="$1238.99"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adBanner">
          <img
            className="image7Icon"
            loading="lazy"
            alt=""
            src="/image-71@2x.png"
          />
        </div>
      </section>

      {/* --------------------- STYLES --------------------- */}
      <style jsx>{`
        .contentParent {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          max-width: 100%;
          text-align: left;
          font-size: 28px;
          color: #3d3131;
          font-family: Poppins;
          position: relative;
          /* If needed, un-comment below to ensure no horizontal overflow:
             overflow-x: hidden; 
          */
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 534px;
          max-width: 115%;
          position: relative;
        }
        .header {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          box-sizing: border-box;
          position: relative;
          gap: 60px;
          max-width: 100%;
        }
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 !important;
          box-shadow: 0px 4px 20px 5px rgba(89, 54, 165, 0.05);
          background: linear-gradient(90deg, #f9f1f1, #fefaff);
          z-index: 0;
        }
        .bestSellerTitleParent {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          position: relative;
          z-index: 1;
        }
        .bestSellerTitle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 6px 0px 0px;
        }
        .bestSeller {
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 150%;
          font-weight: 600;
          font-family: inherit;
          z-index: 1;
        }
        .buttonShort {
          height: 54px;
          box-shadow: 0px 4px 16px rgba(130, 47, 82, 0.1);
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(209, 9, 80, 0.5);
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 13px 49px 13px 54px;
          z-index: 1;
          text-align: center;
          font-size: 18px;
          color: #d10950;
          font-family: Montserrat;
          position: relative;
        }
        .viewMore {
          text-decoration: none;
          flex: 1;
          position: relative;
          font-weight: 600;
          color: inherit;
          display: inline-block;
          min-width: 100px;
        }

        .productOptions {
          align-self: stretch;
          padding: 0px 29px 0px 21px;
          box-sizing: border-box;
          max-width: 100%;
          display: grid;
          grid-template-columns: 1295px;
          text-align: center;
          font-size: 20px;
          font-family: Montserrat;
        }
        .products {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 15px;
          max-width: 100%;
        }
        .items {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
          min-width: 242px;
          max-width: 247px;
        }
        .itemOption1 {
          width: 247px;
          height: 274px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 11.5px 0px 14.5px 0.9px;
          box-sizing: border-box;
          position: relative;
        }
        .wrapperBg {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .bgIcon {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0px;
          left: 0px;
          border-radius: 33.6px;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          z-index: 0;
        }
        .content1 {
          height: 248px;
          width: 246.1px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 43px;
          box-sizing: border-box;
          gap: 9px;
          z-index: 1;
        }
        .content3 {
          height: 248px;
          width: 246.1px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0px 43.1px 0px 43px;
          box-sizing: border-box;
          gap: 9px;
          z-index: 1;
        }
        .imageIcon {
          width: 160px;
          height: 160px;
          position: relative;
          object-fit: cover;
        }
        .title8 {
          margin-left: -52.5px;
          width: 266px;
          height: 25px;
          position: relative;
          font-weight: 600;
          display: inline-block;
          flex-shrink: 0;
        }
        .starIcon {
          height: 16px;
          width: 16px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .rating1 {
          height: 16px;
          width: 107.6px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 4.6px;
          box-sizing: border-box;
          gap: 4.6px;
        }
        .rating {
          width: 133.8px;
          height: 16px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px 26.2px;
          box-sizing: border-box;
        }
        .ratingWrapper {
          width: 133.8px;
          height: 16px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px 26.2px 0px 0px;
          box-sizing: border-box;
        }
        .placeholder {
          margin-left: -54px;
          width: 269px;
          height: 20px;
          position: relative;
          font-size: 16px;
          font-weight: 600;
          color: #e60b0b;
          display: inline-block;
          flex-shrink: 0;
        }

        .recentProducts {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px 16px;
          box-sizing: border-box;
          max-width: 100%;
          font-family: Montserrat;
        }
        .recentView {
          flex: 1;
          box-shadow: 0px 4px 40px 10px rgba(89, 54, 165, 0.05);
          background: linear-gradient(90deg, #f9f1f1, #fefaff);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 16.3px 338px 54px 336px;
          box-sizing: border-box;
          position: relative;
          gap: 26.3px;
          max-width: 100%;
        }
        .bg1 {
          position: relative;
          margin: 0 !important;
          box-shadow: 0px 4px 40px 10px rgba(89, 54, 165, 0.05);
          background: linear-gradient(90deg, #f9f1f1, #fefaff);
          display: none; /* hide or remove if you don't need it */
          width: 100%;
          height: auto;
          z-index: 0;
        }
        .div {
          /* Just an empty placeholder div - adjust or remove as needed */
          width: 100%;
          height: 2px;
          background: transparent;
          position: relative;
          z-index: 1;
        }
        .recentWrapper {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 3.7px;
          max-width: 100%;
        }
        .recentHeader {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          max-width: 100%;
          gap: 20px;
        }
        .recentTitleWrapper {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          row-gap: 20px;
          max-width: 100%;
        }
        .arrowIcon {
          height: 51.7px;
          width: 54px;
          position: relative;
          object-fit: contain;
          z-index: 2;
        }
        .youRecentlyWatchedWrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 12.7px 0px 0px;
          box-sizing: border-box;
          min-width: 213px;
          max-width: 100%;
          margin-left: -4.8px;
        }
        .wrapperArrow {
          position: relative;
        }
        .arrowIcon1 {
          height: 51.7px;
          width: 54px;
          position: relative;
          z-index: 1;
        }
        .recentSubtitle {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 48px 0px 49px;
          font-size: 16px;
        }
        .getAllThe {
          position: relative;
          line-height: 150%;
          z-index: 1;
        }
        .recentlyViewedProducts {
          padding: 0px 26px;
          box-sizing: border-box;
          max-width: 100%;
          display: grid;
          grid-template-columns: 1180px;
        }
        .recentProductCards {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 15px;
          max-width: 100%;
        }
        .recentCardItems {
          height: 308px;
          flex: 1;
          position: relative;
          min-width: 185px;
        }
        .active {
          position: absolute;
          top: 146.9px;
          left: 193px;
          border-radius: 20px;
          background: linear-gradient(180deg, #0467a4, #0e8ad7);
          width: 52px;
          height: 14.4px;
          z-index: 1;
        }
        .recentCardItems1 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
        }
        .div1 {
          width: 34px;
          height: 14.4px;
          position: absolute;
          bottom: 146.7px;
          left: 2.1px;
          border-radius: 20px;
          background-color: #313c54;
          z-index: 1;
        }
        .div2 {
          width: 34px;
          height: 14.4px;
          position: absolute;
          bottom: 146.7px;
          left: 46.1px;
          border-radius: 20px;
          background-color: #313c54;
          z-index: 1;
        }

        .adBanner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          width: 100%;
        }
        .image7Icon {
          align-self: stretch;
          position: relative;
          border-radius: 50px;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        }

        /* ---------------- MEDIA QUERIES ---------------- */
        @media screen and (max-width: 1400px) {
          .bestSellerTitleParent {
            flex-wrap: wrap;
          }
          .recentTitleWrapper {
            flex-wrap: wrap;
          }
          .recentHeader {
            flex-wrap: wrap;
          }
          /* On <=1400px, show 2 columns for recently viewed */
          .recentProductCards {
            justify-content: center;
            grid-template-columns: repeat(2, minmax(213px, 369px));
          }
        }

        /* On <=950px, keep 2 columns in .recentProductCards as well */
        @media screen and (max-width: 950px) {
          .recentProductCards {
            flex-wrap: wrap;
            grid-template-columns: repeat(2, minmax(213px, 1fr));
          }
        }

        @media screen and (max-width: 450px) {
          .bestSeller {
            font-size: 22px;
            line-height: 34px;
          }
          .youRecentlyWatchedWrapper {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
});

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
