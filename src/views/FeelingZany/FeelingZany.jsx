import React, { useState } from "react";
import "./FeelingZany.css";
import { setColor } from "../../components/Color/Color";

function randomHex() {
  return "0123456789abcdef"[parseInt(Math.random() * 16)];
}

function Randomizer(props) {
  return (
    <button className="feeling-zany-randomizer" onClick={() => props.setColor("#" + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex())}>Go crazy!</button>
  );
}

export default function FeelingZanyScreen() {
  return (
    <div className="screen-background">
      <Randomizer setColor={setColor} />
    </div>
  );
}
