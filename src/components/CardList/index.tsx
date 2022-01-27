import React from "react";
import Card from "../Card";
import { RobotType as CardProps } from "../../types";

type CardListProps = {
  robots: CardProps[] | null;
};

const CardList = (cardList: CardListProps) => {
  const { robots } = cardList;
  const renderCardList =
    robots &&
    robots.map(({ id, name, username, email }) => {
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
