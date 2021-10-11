import React from 'react';
import Logo from 'images/logo.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Pangolin - Camelot" />
      <div className={styles.stats}>
        <div>Theme Toggle</div>
        <div className={styles.fill}>85,029 PNG</div>
        <div className={styles.nofill}>1428 AVAX</div>
      </div>
    </header>
  );
};

export default Header;
