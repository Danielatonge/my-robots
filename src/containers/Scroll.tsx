import React from "react";

type Props = {
  children: React.ReactElement;
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "1px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
