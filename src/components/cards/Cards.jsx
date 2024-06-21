import "./Cards.css";

import Card from "../card/Card";

const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((c) => (
        <Card card={c} />
      ))}
    </>
  );
};

export default Cards;
