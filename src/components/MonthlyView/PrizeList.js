import React from "react";
import Prize from "./Prize";
import Row from "react-bootstrap/Row";

export default function PrizeList() {
  let prizes = [
    {
      id: 1,
      cost: 5000,
      name: "PS5",
      src: "./images/ps5.jpg",
      bought: false,
    },
    {
      id: 2,
      cost: 10000,
      name: "Nintendo Switch",
      src: "./images/nintendo.jpg",
      bought: false,
    },
    {
      id: 3,
      cost: 20000,
      name: "Xbox Series X",
      src: "./images/xboxX.jpg",
      bought: false,
    },
  ];

  const buyPrize = (e) => {
    // console.log(prizes[e.target.id - 1].bought)
    prizes[e.target.id - 1].bought = true;
    // console.log(prizes);
    // prizes = prizes.splice(1, e.target.id - 1);
    console.log(prizes);
  };

  return (
    <Row className="bottom">
      {prizes
        .filter((prize) => {
          if (prize.bought != true) {
            return prize;
          } 
        })
        .map(({ cost, name, src, id, bought }) => (
          <Prize
            key={id}
            id={id}
            cost={cost}
            name={name}
            src={src}
            buyPrize={buyPrize}
          />
        ))}
    </Row>
  );
}
