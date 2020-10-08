import React, { useState } from "react";

export let setColor;

export default function Color(props) {
  let color;
  [color, setColor] = useState("#ffffff");

  return (
    <div style={{backgroundColor: color}}>{props.children}</div>
  );
}
