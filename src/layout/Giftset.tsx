import React from 'react';

export const Giftset: React.FC = () => {
  return (
    <section className="giftset">
      <div className="giftset__heading">
        <h4 className="heading-4">Best Gift For Best Friend</h4>
        <h2 className="heading-2">Giftset</h2>
      </div>
      <div className="giftset__card">
        <img src="../assets/img/gift.png" alt="Giftset" className="giftset__img" />
        <div className="giftset__body">
          <div className="giftset__price heading-4">285.000</div>
          <div className="giftset__name heading-3">Giftset "Cà phê phin Việt Nam"</div>
          <p className="giftset__description">
            Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,
            rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình
            yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng
            cho bạn.
          </p>
          <div className="giftset__description-item">
            <img src="../assets/img/beans.svg" alt="Coffee beans" />
            <h5>Loại hạt</h5>
            <div>Fine Robusta Blend</div>
          </div>
          <div className="giftset__description-item">
            <img src="../assets/img/mountain.svg" alt="Coffee beans" />
            <h5>Độ cao</h5>
            <div>700 - 800m</div>
          </div>
          <button className="btn btn--primary">MUA NGAY</button>
          <button className="btn btn--secondary">CHI TIẾT</button>
        </div>
        <div className="giftset__types">
          <div className="giftset__type giftset__type--1">1</div>
          <div className="giftset__type giftset__type--2">2</div>
          <div className="giftset__type giftset__type--3">3</div>
        </div>
      </div>
    </section>
  );
};
