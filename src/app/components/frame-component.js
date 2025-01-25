'use client';

import { memo } from 'react';
import FrameComponent1 from './frame-component1';

const FrameComponent = memo(() => {
  return (
    <header className="infoContainerParent">
      {/* ======================= */}
      {/*       TOP INFO BAR     */}
      {/* ======================= */}
      <div className="infoContainer">
        <div className="infoContainerChild" />
        <div className="infoWrapper">
          {/* Store Location */}
          <div className="infoItems">
            <div className="infoItem">
              <div className="locationItem">
                <img
                  className="mapMarkerAltIcon"
                  alt=""
                  src="/mapmarkeralt.svg"
                />
              </div>
              <a className="storeLocation">Store Location</a>
              <div className="infoItemChild" />
            </div>
          </div>

          {/* Track Your Order */}
          <div className="orderItem">
            <img className="carSideIcon" alt="" src="/carside.svg" />
            <div className="trackYourOrderWrapper">
              <a className="trackYourOrder">Track Your Order</a>
            </div>
            <div className="locationItem">
              <div className="frameChild" />
            </div>
          </div>

          {/* Call Us For Enquiry */}
          <div className="infoItems">
            <div className="orderItem">
              <div className="enquiryContainer">
                <img
                  className="mapMarkerAltIcon"
                  alt=""
                  src="/phonealt.svg"
                />
              </div>
              <a className="storeLocation">Call Us For Enquiry</a>
            </div>
          </div>
          <div className="infoItems">
            <div className="frameChild" />
          </div>

          {/* Welcome Text */}
          <div className="welcomeItem">
            <div className="locationItem">
              <img
                className="mapMarkerAltIcon"
                alt=""
                src="/heart-14.svg"
              />
            </div>
            <div className="welcomeToJordan">
              Welcome to Jordan. We provides best IT Electronics item
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="socialContainer">
          <div className="socialIcons">
            <img className="carSideIcon" alt="" src="/instagram-1.svg" />
            <img className="carSideIcon" alt="" src="/facebook-1.svg" />
            <img className="carSideIcon" alt="" src="/twitter-1.svg" />
            <img className="carSideIcon" alt="" src="/youtube-1.svg" />
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/*    MAIN HEADER AREA   */}
      {/* ====================== */}
      <div className="header">
        <div className="headerContainer">
          <div className="headerWrapper">
            {/* Logo */}
            <div className="headerItems">
              <img
                className="jisLogo11"
                alt=""
                src="/jis-logo1-1@2x.png"
              />
            </div>

            {/* Search Bar */}
            <div className="searchContainer">
              <div className="searchWrapper">
                {/* Dropdown for Categories */}
                <select className="categoryDropdown">
                  <option value="all">All Categories</option>
                  <option value="laptops">Laptops</option>
                  <option value="desktops">Desktops</option>
                  <option value="servers">Servers</option>
                  <option value="printers">Printers</option>
                </select>
                {/* Actual Text Input */}
                <input
                  type="text"
                  className="searchInputField"
                  placeholder="Search for product..."
                />
                {/* Search Button */}
                <div className="searchButton">
                  <div className="searchButtonChild" />
                  <a className="search">Search</a>
                </div>
              </div>
            </div>

            {/* User Actions (Profile/Wishlist/Cart) + Become Seller */}
            <div className="userActions">
              <div className="userActionsContainer">
                <div className="userActionsWrapper">
                  <div className="socialIcons">
                    {/* Profile Icon */}
                    <img
                      className="userCircleIcon"
                      alt=""
                      src="/usercircle.svg"
                    />
                    {/* Wishlist */}
                    <div className="likeParent">
                      <img
                        className="likeIcon"
                        alt=""
                        src="/like@2x.png"
                      />
                      <div className="ellipseParent">
                        <div className="frameInner" />
                        <a className="youexamplecom">0</a>
                      </div>
                    </div>
                    {/* Cart */}
                    <div className="shoppingCartParent">
                      <img
                        className="likeIcon"
                        alt=""
                        src="/shopping-cart@2x.png"
                      />
                      <div className="ellipseParent">
                        <div className="frameInner" />
                        <b className="password">0</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <a className="becomeASeller">Become a Seller</a>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION CATEGORIES */}
          <nav className="categories">
            {/* 1) COMPUTER PERIPHERAL */}
            {/* 1) computer */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                 src="/mask-group-4@2x.png"
                  />
                </div>
                <a className="allCategories">Computer periferal</a>
              </div>
            </div>

            {/* 2) DESKTOP */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-5@2x.png"
                  />
                </div>
                <a className="allCategories">Desktop</a>
              </div>
            </div>

            {/* 3) SERVER */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-6@2x.png"
                  />
                </div>
                <a className="server">server</a>
              </div>
            </div>

            {/* 4) SCREEN */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-7@2x.png"
                  />
                </div>
                <a className="allCategories">screen</a>
              </div>
            </div>

            {/* 5) COMPONENT */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-8@2x.png"
                  />
                </div>
                <a className="component">component</a>
              </div>
            </div>

            {/* 6) LAPTOP */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-9@2x.png"
                  />
                </div>
                <a className="laptop">Laptop</a>
              </div>
            </div>

            {/* 7) PRINTER */}
            <div className="categoriesContainer">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-10@2x.png"
                  />
                </div>
                <a className="allCategories">Printer</a>
              </div>
            </div>

            {/* 8) TABLE */}
            <div className="categoriesContainer6">
              <div className="categoriesWrapper">
                <div className="locationItem">
                  <img
                    className="maskGroupIcon"
                    alt=""
                    src="/mask-group-11@2x.png"
                  />
                </div>
                <div className="table">Table</div>
              </div>
            </div>

            {/* 9) LOGIN / SIGN UP */}
         
            <div className="categoriesContainer6">
              <div className="categoriesWrapper">
                <div className="locationItem">
                    <img
                      className="enterIcon"
                      alt=""
                      src="/enter@2x.png"
                    />
                  </div>
                  <div className="loginSign">Login / Sign up</div>
                </div>
              </div>          
          </nav>
        </div>
      </div>

      {/* ============================================ */}
      {/*   <style jsx> block for all the header CSS   */}
      {/* ============================================ */}
      <style jsx>{`
        /* ============================= */
        /*          TOP INFO BAR         */
        /* ============================= */
        .infoContainerChild {
          height: 37px;
          width: 1440px;
          position: relative;
          background-color: #0c81c9;
          display: none;
          max-width: 100%;
        }
        .mapMarkerAltIcon {
          width: 15px;
          height: 15px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          z-index: 1;
        }
        .locationItem {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1px 0px 0px;
        }
        .storeLocation {
          text-decoration: none;
          position: relative;
          font-weight: 500;
          color: inherit;
          z-index: 1;
        }
        .infoItemChild {
          height: 19px;
          width: 1px;
          position: relative;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          z-index: 1;
        }
        .infoItem {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10.5px;
        }
        .infoItems {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px 0px 1px;
        }
        .carSideIcon {
          height: 20px;
          width: 20px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          z-index: 1;
        }
        .trackYourOrder {
          text-decoration: none;
          position: relative;
          font-weight: 500;
          color: inherit;
          display: inline-block;
          min-width: 103px;
          z-index: 1;
        }
        .trackYourOrderWrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1px 4px 0px 0px;
        }
        .frameChild {
          width: 1px;
          height: 19px;
          position: relative;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          z-index: 1;
        }
        .orderItem {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 8px;
        }
        .enquiryContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 2px 0px 0px;
        }
        .welcomeToJordan {
          position: relative;
          font-weight: 500;
          z-index: 1;
        }
        .welcomeItem {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 8px;
          max-width: 100%;
        }
        .infoWrapper {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 14px;
          max-width: 100%;
        }
        .socialIcons {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .socialContainer {
          width: 155px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1px 0px 0px;
          box-sizing: border-box;
        }
        .infoContainer {
          align-self: stretch;
          background-color: #0c81c9;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          padding: 8px 46px 8px 51px;
          box-sizing: border-box;
          max-width: 100%;
          gap: 20px;
        }

        /* ============================= */
        /*        MAIN HEADER AREA       */
        /* ============================= */
        .jisLogo11 {
          width: 75px;
          height: 79px;
          position: relative;
          object-fit: cover;
        }
        .headerItems {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 38px 0px 0px;
        }
        .searchContainer {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 12px 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
        }
        .searchWrapper {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          box-sizing: border-box;
          border-radius: 16px;
          background-color: #f9f9f9;
          padding: 4px 8px;
        }
        .categoryDropdown {
          font-family: "Montserrat", sans-serif;
          padding: 8px;
          font-size: 14px;
          border: none;
          cursor: pointer;
        }
        .searchInputField {
          flex: 1;
          font-size: 14px;
          padding: 8px;
          border: none;
          background-color: transparent;
          outline: none;
        }
        .searchButton {
          border-radius: 4px;
          background-color: #0c81c9;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          gap: 4px;
          cursor: pointer;
        }
        .searchButtonChild {
          display: none;
        }
        .search {
          text-decoration: none;
          font-weight: 700;
          color: #fff;
        }
        .userCircleIcon {
          height: 30px;
          width: 30px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .likeIcon {
          /* Make sure icons are visible */
          display: block;
          height: 30px;
          width: 30px;
          position: relative;
          object-fit: cover;
        }
        .frameInner {
          position: absolute;
          top: 0px;
          left: 0px;
          border-radius: 50%;
          background-color: #0e8ad7;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .youexamplecom {
          text-decoration: none;
          position: absolute;
          top: 1px;
          left: 4px;
          font-weight: 700;
          color: inherit;
          display: inline-block;
          width: 5px;
          height: 9px;
          min-width: 5px;
          z-index: 2;
        }
        .ellipseParent {
          height: 11px;
          flex: 1;
          position: relative;
        }
        .likeParent {
          width: 33px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px 0px 19px 22px;
          box-sizing: border-box;
          /* Remove background so icon is visible */
          background-image: none;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
        }
        .password {
          position: absolute;
          top: 1px;
          left: 4px;
          display: inline-block;
          width: 5px;
          height: 9px;
          min-width: 5px;
          z-index: 2;
          font-weight: 700;
        }
        .shoppingCartParent {
          width: 32px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1px 0px 18px 21px;
          box-sizing: border-box;
          /* Remove background so icon is visible */
          background-image: none;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
        }
        .userActionsWrapper {
          width: 155px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 9px 0px 0px;
          box-sizing: border-box;
        }
        .becomeASeller {
          text-decoration: none;
          flex: 1;
          position: relative;
          line-height: 25px;
          font-weight: 500;
          color: #fff;
        }
        .button {
          flex: 1;
          border-radius: 20px;
          background-color: #0c81c9;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 11px 13px 13px 15px;
          text-align: center;
          font-size: 18px;
          font-family: Montserrat, sans-serif;
          color: #fff;
        }
        .userActionsContainer {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 27px;
        }
        .userActions {
          width: 368px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 15px 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
          font-size: 6px;
          color: #fff;
        }
        .headerWrapper {
          width: 1329px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 38px;
          max-width: 100%;
        }
        .headerContainer {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 13px;
          max-width: 100%;
        }

        /* Nav Categories */
        .maskGroupIcon {
          width: 25px;
          height: 25px;
          position: relative;
          object-fit: cover;
          z-index: 1;
        }
        .peripheralNameChild {
          height: 45px;
          width: 1165px;
          position: relative;
          max-width: 678%;
        }
        .computerPeriferal {
          position: relative;
          white-space: nowrap;
          z-index: 1;
          font-weight: 600;
        }
        .peripheralName {
          height: 27px;
          width: 172px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
        }
        .peripheralContainer {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
        }
        .peripheral {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 9px 0px 0px;
          min-width: 180px;
        }
        .categoriesWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
        }
        .categoriesContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 9px 0px 0px;
        }
        .allCategories {
          text-decoration: none;
          position: relative;
          color: inherit;
          display: inline-block;
          min-width: 64px;
          z-index: 1;
          font-weight: 600;
        }
        .server {
          text-decoration: none;
          position: relative;
          color: inherit;
          display: inline-block;
          min-width: 57px;
          z-index: 1;
          font-weight: 600;
        }
        .component {
          text-decoration: none;
          position: relative;
          color: inherit;
          display: inline-block;
          min-width: 107px;
          z-index: 1;
          font-weight: 600;
        }
        .laptop {
          text-decoration: none;
          position: relative;
          color: inherit;
          display: inline-block;
          min-width: 64px;
          z-index: 1;
          font-weight: 600;
        }
        .table {
          position: relative;
          z-index: 1;
          font-weight: 600;
        }
        .categoriesContainer6 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 9px 16px 0px 0px;
        }
        .enterIcon {
          width: 18px;
          height: 18px;
          position: relative;
          object-fit: cover;
        }
        .authInput {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 3px 0px 0px;
          flex-shrink: 0;
        }
        .loginSign {
          position: relative;
          display: inline-block;
          min-width: 119px;
        }
        .authWrapper {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 13px;
        }
        .authContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 10px 0px 0px;
        }
        .authChild {
          height: 45px;
          width: 66px;
          position: relative;
        }
        .auth {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 5px;
          font-size: 16px;
          color: #000;
        }
        .categories {
        padding: 1%;
        background: #0D81C8;
          margin: 0;
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          /* Let the categories wrap so they don't overlap on smaller screens */
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 20px;
          text-align: left;
          font-size: 18px;
          color: #fff;
          font-family: Poppins, sans-serif;
        }
        .header {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px 45px 0px 48px;
          box-sizing: border-box;
          max-width: 100%;
          font-size: 20px;
          color: #b9b9b9;
        }

        /* ============================= */
        /*         PARENT WRAPPER        */
        /* ============================= */
        .infoContainerParent {
          position: relative; /* changed from absolute so it won't overlap the page */
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 23px;
          max-width: 100%;
          text-align: left;
          font-size: 12px;
          color: #fff;
          font-family: Poppins, sans-serif;
          overflow: hidden;
        }

        /* ============================= */
        /*       MEDIA QUERIES           */
        /* ============================= */

        /* Hide the welcome text on smaller screens, for example */
        @media screen and (max-width: 1400px) {
          .welcomeToJordan {
            display: none;
          }
        }

        /* Tablet-ish breakpoint */
        @media screen and (max-width: 950px) {
          .infoContainer {
            padding-left: 25px;
            padding-right: 23px;
            box-sizing: border-box;
          }
          .headerWrapper {
            gap: 19px;
            flex-wrap: wrap; /* Let header items wrap if needed */
          }
          .header {
            padding-left: 24px;
            padding-right: 22px;
            box-sizing: border-box;
          }
          .searchContainer {
            width: 100%;
          }
        }

        /* Very small screens (mobile) */
        @media screen and (max-width: 450px) {
          .categories {
            display: none; /* Hide category navbar on mobile or implement a hamburger menu */
          }
          .infoWrapper {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          .infoItems,
          .orderItem,
          .welcomeItem {
            flex-direction: row;
            justify-content: center;
          }
          .infoContainer {
            flex-direction: column;
            align-items: center;
            padding: 8px;
          }
          .headerWrapper {
            flex-direction: column;
            align-items: center;
          }
          .headerItems {
            padding-right: 0;
            margin-bottom: 10px;
          }
          .userActions {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
});

export default FrameComponent;
