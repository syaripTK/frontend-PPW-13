import "./Content.css";

const Card = ({ member, price, isGold }) => {
  return (
    <div>
      <div className="cardo">
        <div className={isGold ? "gold-header" : "cardo-header"}>
          <p>{member ? member : "Free"}</p>
          <div className="price">
            <h2>Rp.{price ? price : 0}</h2>
            <span>/bulan</span>
          </div>
        </div>
        <div className="cardo-boady">
          <ul>
            <li>Update promo umum</li>
            <li>Booking lebih mudah</li>
            <li>Jadi member resmi tanpa biaya</li>
          </ul>
          <button className={isGold? "gold-btn": "ordinary-btn"}>Purchase Plane</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
