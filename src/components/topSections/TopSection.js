import React from "react";
import "./style.css";

const TopSection = props => {
  return (
    <div className="wrapper">
      <h1 className="title">{props.name}</h1>
      <hr className="border-line" />
      <div className="cards">
        <img src={props.image} />
        <div className="cards-container">
          <h2 className="cards-title">{props.sectionName}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
