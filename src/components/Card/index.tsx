import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div>
      <img alt="robots" src="https://robohash.org/test?200x200" />
      <div>
        <h2>Daniel Atonge</h2>
        <p>d.atonge@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
