import React from "react";
import "./About.css";
import CutePic from "../../assets/webscraper.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>I am the chungus.</h1>
          <h2>Chungus @ 🅱️arvard, 3023</h2>
          <p>Aww man!</p>
        </div>
      </div>
    </div>
  );
}
