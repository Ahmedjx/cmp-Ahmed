import React, { useState } from "react";
import "./ExpindItim.css";
import Card from "./card";

import ExpinsDate from "./ExpinsDate";
function ExpinsItim(props) {
  const [title, setTitle] = useState(props.title);
  const clike = () => {
    setTitle("ubdate");
  };
  return (
    <card className="expense-item">
      <ExpinsDate date={props.date}></ExpinsDate>
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">${props.amonut}</div>
      </div>
      <button onclick={clike}>change title</button>
    </card>
  );
}
export default ExpinsItim;
