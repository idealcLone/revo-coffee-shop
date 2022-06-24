import React from 'react';
import { Header } from './layout/Header';
import { Features } from './layout/Features';
import { Coffee } from './layout/Coffee';
import { Combo } from './layout/Combo';
import { Giftset } from './layout/Giftset';
import { Footer } from './layout/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Features />
      <Coffee />
      <Giftset />
      <Combo />
      <Footer />
    </>
  );
};
