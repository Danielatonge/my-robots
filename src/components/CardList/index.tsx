import React from "react";
import Card, { CardProps } from "../Card";

type CardListProps = {
  robots: CardProps[];
};

const CardList = (cardList: CardListProps) => {
  const { robots } = cardList;
  const renderCardList = robots.map(({ id, name, username, email }) => {
    return (
      <Card
        key={id}
        id={id}
        name={name}
        username={username}
        email={email}
      ></Card>
    );
  });
  return <div>{renderCardList}</div>;
};

export default CardList;
