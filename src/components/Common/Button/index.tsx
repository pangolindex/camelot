import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
  icon?: string | ReactNode;
  children?: ReactNode;
  onClick?: (e?: any) => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', icon, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button type={type} {...props} className={styles.button}>
      {icon && icon} <span className={classnames({ [styles.text]: icon })}>{children}</span>
    </button>
  );
};

export default Button;
