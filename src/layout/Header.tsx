import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__title">
        <img src="../assets/img/logo.png" alt="Revo Logo" className="header__logo" />
        <h1 className="header__heading heading-1">
          Your <span className="accent">personalized</span> coffee
        </h1>
      </div>
      <div className="header__hero" />
      <nav className="nav">
        <div className="nav__icon-box">
          <img src="../assets/img/cart.svg" alt="Cart Icon" className="nav__cart" />
          <div className="nav__count">2</div>
        </div>
        <ul className="nav__links">
          <a href="#" className="nav__link">
            TRANG CHỦ
          </a>
          <a href="#" className="nav__link">
            COFFEE
          </a>
          <a href="#" className="nav__link">
            PHIN MẠ MÀU
          </a>
          <a href="#" className="nav__link">
            COMBO PHIN PHÊ
          </a>
          <a href="#" className="nav__link">
            GIFTSET
          </a>
          <a href="#" className="nav__link">
            LIÊN HỆ
          </a>
        </ul>
      </nav>
    </header>
  );
};
