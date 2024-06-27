import { useEffect, useState } from "react";

import "./App.css";

import Card from "./components/card/Card";

const cardImages = [
  { matched: false, src: "/img/helmet-1.png" },
  { matched: false, src: "/img/potion-1.png" },
  { matched: false, src: "/img/ring-1.png" },
  { matched: false, src: "/img/scroll-1.png" },
  { matched: false, src: "/img/shield-1.png" },
  { matched: false, src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  //compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choises and increase turn
  const resetTurn = () => {
    setDisabled(false);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: "2rem" }}>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {/* <Cards cards={cards} /> */}
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p style={{ marginTop: "1rem " }}>Turns: {turns}</p>
    </div>
  );
}

export default App;
