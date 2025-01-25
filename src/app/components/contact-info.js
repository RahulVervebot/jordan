import { memo } from "react";
import ColumnWithLinksFooter from "./column-with-links-footer";
import PropTypes from "prop-types";
import styles from "./contact-info.module.css";

const ContactInfo = memo(({ className = "" }) => {
  return (
    <div className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.contactInfoChild} />
      <div className={styles.contactDetailsParent}>
        <div className={styles.contactDetails}>
          <div className={styles.contactTitle}>
            <b className={styles.contactInformation}>CONTACT INFORMATION</b>
          </div>
          <div className={styles.addressDetails}>
            <div className={styles.addressWrapper}>
              <b className={styles.address}>ADDRESS</b>
              <div className={styles.shoppingFirstFor}>
                Shopping First For Coupon $20 Receive and.....
              </div>
            </div>
          </div>
          <div className={styles.phoneDetails}>
            <div className={styles.phoneWrapper}>
              <b className={styles.phone}>PHONE</b>
              <div className={styles.shoppingFirstFor}>+91 0123456789</div>
            </div>
          </div>
          <div className={styles.emailDetails}>
            <div className={styles.emailWrapper}>
              <b className={styles.email}>EMAIL</b>
              <div className={styles.infokrizaarcomInfokrizaar}>
                <p className={styles.infokrizaarcom}>info@krizaar.com</p>
                <p className={styles.infokrizaarcom}>info@krizaar.com</p>
              </div>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.socialLinks}>
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/instagram.svg"
              />
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/youtube.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.newsLetterWrapperParent}>
          <div className={styles.newsLetterWrapper}>
            <b className={styles.contactInformation}>NEWSLETTER</b>
          </div>
          <div className={styles.newsletterForm}>
            <div className={styles.formInput}>
              <div className={styles.inputFieldParent}>
                <div className={styles.inputField}>
                  <div className={styles.loremIpsumIsSimply}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
                <div className={styles.emailInput}>
                  <div className={styles.emailInputChild} />
                  <div className={styles.emailBox}>
                    <div className={styles.enterYourEmail}>
                      Enter your email
                    </div>
                  </div>
                  <div className={styles.inputBox} />
                </div>
              </div>
            </div>
            <div className={styles.subscribe}>
              <div className={styles.firstDivider} />
              <div className={styles.footerLinks}>
                <div className={styles.linksContainer}>
                  <div className={styles.footerColumns}>
                    <ColumnWithLinksFooter quickLinks="Quick links" />
                    <div className={styles.columnWithLinksFooter}>
                      <h3 className={styles.quickLinks}>My Accounts</h3>
                      <div className={styles.links}>
                        <div className={styles.aboutUs}>Whishlist</div>
                        <a className={styles.compare}>Delivery</a>
                        <div className={styles.contactUs}>{`T&C`}</div>
                        <div className={styles.legalNotice}>All Collection</div>
                        <a className={styles.legalNotice1}>Contact Us</a>
                        <div className={styles.legalNotice2}>Legal Notice</div>
                      </div>
                    </div>
                    <ColumnWithLinksFooter
                      quickLinks="Products"
                      quickLinksWidth="115px"
                      linksWrapperWidth="114px"
                      contactUsTextDecoration="unset"
                    />
                    <div className={styles.columnWithLinksFooter1}>
                      <h3 className={styles.quickLinks1}>Our Company</h3>
                      <div className={styles.links}>
                        <div className={styles.aboutUs1}>Shipping</div>
                        <a className={styles.compare1}>FAQ</a>
                        <a className={styles.contactUs1}>Delivery</a>
                        <div className={styles.legalNotice3}>{`T&C`}</div>
                        <div className={styles.legalNotice4}>Legal Notice</div>
                        <a className={styles.legalNotice5}>Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.lineParent}>
        <div className={styles.firstDivider} />
        <div className={styles.copyright}>
          <div
            className={styles.copyright2024Degine}
          >{`Copyright 2024 Degine & Developed By Khushi Sahu`}</div>
        </div>
      </footer>
    </div>
  );
});

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
