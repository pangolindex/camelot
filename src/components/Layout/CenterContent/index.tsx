import React from 'react';
import styles from './centercontent.module.scss';

export interface CenterContentProps {
  children?: React.ReactNode;
}

const CenterContent: React.FC<CenterContentProps> = ({ children }: CenterContentProps): JSX.Element => {
  return <div className={styles.center}>{children}</div>;
};

export default CenterContent;
