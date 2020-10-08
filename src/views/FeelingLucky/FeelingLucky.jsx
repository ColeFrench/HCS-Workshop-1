import React, { useState } from "react";
import "./FeelingLucky.css";

function Roller(props) {
  return (
    <button className="feeling-lucky-roller" onClick={() => props.setRoll(parseInt(1 + Math.random() * 100))}>Roll me!</button>
  );
}

function Result(props) {
  return (
    <div className="feeling-lucky-result"><h1>{props.roll}</h1></div>
  );
}

export default function FeelingLuckyScreen() {
  const [roll, setRoll] = useState(1);

  return (
    <div className="screen-background">
      <div className="feeling-lucky-background">
        <Roller setRoll={setRoll} />
        <Result roll={roll} />
      </div>
    </div>
  );
}
