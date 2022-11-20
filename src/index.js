//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const date = new Date().getHours(); // get the hour of the day

ReactDom.render(
  <div className="heading">
    <h1 style={{ color: "red" }}>{date >= 0 && date < 12 && "Good morning"}</h1>
    <h1 style={{ color: "green" }}>
      {date >= 12 && date < 18 && "Good Afternoon"}
    </h1>
    <h1 style={{ color: "blue" }}>
      {date >= 18 && date <= 23 && "Good Evening"}
    </h1>
  </div>,
  document.getElementById("root")
);
