import React from "react";
import "./Lists.css";

function Lists(props) {
  console.log(props.data);
  return (
    <div className="Content">
      {props.data.map((item) => (
        <div className="Card">{item.Brand}</div>
      ))}
    </div>
  );
}

export default Lists;
