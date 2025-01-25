import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.image6Icon}
        loading="lazy"
        alt=""
        src="/image-6@2x.png"
      />
    </div>
  );
};

export default Header;
