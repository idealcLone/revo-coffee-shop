import React from 'react';

export const Coffee: React.FC = () => {
  return (
    <section className="coffee">
      <div className="coffee__heading">
        <h4 className="heading-4">Choose Your Favorite</h4>
        <h2 className="heading-2">CHUẨN GU ĐÚNG VỊ</h2>
      </div>

      <div className="coffee__side" />

      <div className="coffee__items">
        <div className="coffee__card">
          <img src="../assets/img/coffee-1.png" alt="Coffee 1" className="coffee__img" />
          <div className="coffee__body">
            <h4 className="coffee__price heading-4">99.000</h4>
            <h3 className="coffee__name heading-3">REVO Morning</h3>
            <p className="coffee__description">đắng, hậu ngọt, hương hoa </p>
            <div className="coffee__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>

        <div className="coffee__card">
          <img src="../assets/img/coffee-2.png" alt="Coffee 2" className="coffee__img" />
          <div className="coffee__body">
            <h4 className="coffee__price heading-4">85.000</h4>
            <h3 className="coffee__name heading-3">REVO Everyday</h3>
            <p className="coffee__description">cân bằng, hậu đắng, vị chocolate </p>
            <div className="coffee__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>

        <div className="coffee__card">
          <img src="../assets/img/coffee-3.png" alt="Coffee 3" className="coffee__img" />
          <div className="coffee__body">
            <h4 className="coffee__price heading-4">139.000</h4>
            <h3 className="coffee__name heading-3">REVO Origin</h3>
            <p className="coffee__description">hậu ngọt, ít đắng, vị chua dâu</p>
            <div className="coffee__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>

        <div className="coffee__card">
          <img src="../assets/img/coffee-4.png" alt="Coffee 4" className="coffee__img" />
          <div className="coffee__body">
            <h4 className="coffee__price heading-4">75.000</h4>
            <h3 className="coffee__name heading-3">REVO Đậm Đà</h3>
            <p className="coffee__description">đậm đà, đắng, truyền thống</p>
            <div className="coffee__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
