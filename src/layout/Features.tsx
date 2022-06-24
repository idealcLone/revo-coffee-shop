import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features__heading">
        <h4 className="heading-4">Your Personalized Coffee</h4>
        <h2 className="heading-2">Coffee build your base</h2>
      </div>
      <div className="features__items">
        <div className="feature">
          <img src="../assets/img/feature-1.png" alt="Feature 1" className="feature__img" />
          <div className="feature__name">Nguồn gốc</div>
          <p className="feature__description">
            Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.
          </p>
        </div>

        <div className="feature">
          <img src="../assets/img/feature-2.png" alt="Feature 2" className="feature__img" />
          <div className="feature__name">Chất lượng</div>
          <p className="feature__description">
            Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.
          </p>
        </div>

        <div className="feature">
          <img src="../assets/img/feature-3.png" alt="Feature 3" className="feature__img" />
          <div className="feature__name">Các loại hạt</div>
          <p className="feature__description">
            70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.
          </p>
        </div>

        <div className="feature">
          <img src="../assets/img/feature-4.png" alt="Feature 4" className="feature__img" />
          <div className="feature__name">Pha chế</div>
          <p className="feature__description">
            Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.
          </p>
        </div>
      </div>
    </section>
  );
};
