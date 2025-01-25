import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./column-with-links-footer.module.css";

const ColumnWithLinksFooter = memo(
  ({
    className = "",
    quickLinks,
    quickLinksWidth,
    linksWrapperWidth,
    contactUsTextDecoration,
  }) => {
    const quickLinksStyle = useMemo(() => {
      return {
        width: quickLinksWidth,
      };
    }, [quickLinksWidth]);

    const linksWrapperStyle = useMemo(() => {
      return {
        width: linksWrapperWidth,
      };
    }, [linksWrapperWidth]);

    const contactUsStyle = useMemo(() => {
      return {
        textDecoration: contactUsTextDecoration,
      };
    }, [contactUsTextDecoration]);

    return (
      <div className={[styles.columnWithLinksFooter, className].join(" ")}>
        <h3 className={styles.quickLinks} style={quickLinksStyle}>
          {quickLinks}
        </h3>
        <div className={styles.linksWrapper} style={linksWrapperStyle}>
          <div className={styles.links}>
            <a className={styles.aboutUs}>About us</a>
            <a className={styles.compare}>Compare</a>
            <a className={styles.contactUs} style={contactUsStyle}>
              Contact us
            </a>
            <div className={styles.legalNotice}>Legal Notice</div>
            <div className={styles.legalNotice1}>Legal Notice</div>
            <div className={styles.legalNotice1}>Legal Notice</div>
          </div>
        </div>
      </div>
    );
  }
);

ColumnWithLinksFooter.propTypes = {
  className: PropTypes.string,
  quickLinks: PropTypes.string,

  /** Style props */
  quickLinksWidth: PropTypes.string,
  linksWrapperWidth: PropTypes.string,
  contactUsTextDecoration: PropTypes.string,
};

export default ColumnWithLinksFooter;
