import React from "react";
import "./style.css";
import HeaderNav from "../navbar/index";
import headerImage from "../../assets/images/Main picture.jpg";
import Ad from "../../assets/images/AD 2.jpg";
import Game from "../../assets/images/game.png";
import TopSection from "../topSections/TopSection";
const SideBar = props => {
  return (
    <div cla ssName="side-bar-wrapper">
      <div className="sidenav">
        <h1 className="LOGO">File.ge</h1>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
        <a>lorem ipsum</a>
      </div>
      <div className="nav-header">
        <HeaderNav />
        <img src={headerImage} className="header-img" />
        <img src={Ad} className="header-ad" />
        <div>
          <TopSection
            name={"Top თამაშები"}
            sectionName={"WATCH DOGS LEGION"}
            image={Game}
          />
          <TopSection
            name={"Top ფილმები"}
            sectionName={"BLADE RUNNER"}
            image={Game}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
