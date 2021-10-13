import React from 'react';
import { useHistory } from 'react-router-dom';
import CategoryCard from './Card';
import TokenIcon from 'images/icons/cate-token.svg';
import ValidatorIcon from 'images/icons/cate-validator.svg';
import VoteIcon from 'images/icons/cate-vote.svg';
import styles from './categories.module.scss';

const Categories = () => {
  const history = useHistory();
  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <div className={styles.categories}>
      <CategoryCard name="Tokens" image={TokenIcon} active={true} onClick={() => handleClick('/tokens')} />
      <CategoryCard name="Validators" image={ValidatorIcon} active={false} />
      <CategoryCard name="Vote" image={VoteIcon} active={false} />
    </div>
  );
};

export default Categories;
