import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card" key={card.id}>
      <div>
        <img src={card.src} className="front" alt="card_front" />
        <img src="img/cover.png" className="back" alt="card_back" />
      </div>
    </div>
  );
};

export default Card;
