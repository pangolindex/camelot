import React from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';

export interface CategoryCardProps {
  image: string;
  name: string;
  active: boolean;
  onClick?: (e?: any) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  name,
  active,
  ...props
}: CategoryCardProps): JSX.Element => {
  return (
    <div className={classnames(styles.card, { [styles.active]: active })} {...props}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.texts}>
        <div className={styles.name}>{name}</div>
        {!active && <div className={styles.description}>Coming Soon</div>}
      </div>
    </div>
  );
};

export default CategoryCard;
