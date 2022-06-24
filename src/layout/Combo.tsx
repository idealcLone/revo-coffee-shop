import React from 'react';

export const Combo: React.FC = () => {
  return (
    <section className="combo">
      <div className="combo__heading">
        <h4 className="heading-4">Your Personalized Coffee</h4>
        <h2 className="heading-2">COMBO PHIN PHÊ</h2>
      </div>
      <div className="combo__list">
        <div className="combo__card">
          <img src="../assets/img/combo-1.png" alt="Combo 1" className="combo__img" />
          <div className="combo__info">
            <div className="combo__prices">
              <h4 className="heading-4 combo__price combo__price--main">147.000</h4>
              <span className="combo__price combo__price--discounted">155.00</span>
            </div>
            <h3 className="heading-3 combo__name">Combo Revo Đậm Đà</h3>
            <p className="combo__description">
              Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...
            </p>
            <div className="combo__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>

        <div className="combo__card">
          <img src="../assets/img/combo-2.png" alt="Combo 2" className="combo__img" />
          <div className="combo__info">
            <div className="combo__prices">
              <h4 className="heading-4 combo__price combo__price--main">156.000</h4>
              <span className="combo__price combo__price--discounted">165.00</span>
            </div>
            <h3 className="heading-3 combo__name">Combo Revo Everyday</h3>
            <p className="combo__description">
              Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...
            </p>
            <div className="combo__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>

        <div className="combo__card">
          <img src="../assets/img/combo-3.png" alt="Combo 3" className="combo__img" />
          <div className="combo__info">
            <div className="combo__prices">
              <h4 className="heading-4 combo__price combo__price--main">275.000</h4>
              <span className="combo__price combo__price--discounted">260.00</span>
            </div>
            <h3 className="heading-3 combo__name">Combo Revo Honey</h3>
            <p className="combo__description">
              Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...
            </p>
            <div className="combo__actions">
              <button className="btn btn--primary">MUA NGAY</button>
              <button className="btn btn--secondary">CHI TIẾT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
