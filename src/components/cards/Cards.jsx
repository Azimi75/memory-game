import "./Cards.css";

import Card from "../card/Card";

const Cards = ({ cards }) => {
  const handleChoice = (card) => {
    console.log(card);
  };

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.id} handleChoice={handleChoice} />
      ))}
    </>
  );
};

export default Cards;
