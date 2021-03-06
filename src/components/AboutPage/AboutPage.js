import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="text">
      <h1 className="header">About Quick-List</h1>
      <div className="bodyText">
        <h2>What is Quick-List?</h2>
        <p>
          {" "}
          I created Quick-List because a lot of the to-do applications that already exist all irked
          me in some way. Usually, a lot of clicking. They were either too slow or required manual
          data entry before creating a task. I don't always need to list nitty-gritty details and I
          didn't want to be spending 5 or more minutes just planning my work for the day; I wanted
          to type... enter... type... enter. Something quick, simple, and not-in-your-face.
        </p>
      </div>
    </div>
  );
}
