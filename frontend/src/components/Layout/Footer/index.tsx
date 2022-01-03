import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;2021 Copyright&nbsp; <span>Pangolin Camelot</span>
    </footer>
  );
};

export default Footer;
