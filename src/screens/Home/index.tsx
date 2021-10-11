import React from 'react';
import AvatarUpload from 'components/Common/AvatarUpload';
import CenterContent from 'components/Layout/CenterContent';
import Button from 'components/Common/Button';
import Categories from 'components/Common/Categories';

const Home = () => {
  return (
    <section className="wrapper">
      <CenterContent>
        <AvatarUpload />
        <Button>Connect Your Wallet</Button>
        <Categories />
      </CenterContent>
    </section>
  );
};

export default Home;
