import React from 'react';
import Button from '../Button';
import styles from './hero.module.scss';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>List Your Token on Pangolin</h1>
      <Button>Add Token</Button>
    </div>
  );
};

export default Hero;
