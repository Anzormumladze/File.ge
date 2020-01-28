import React from "react";
import "./style.css";
import HeaderNav from "../navbar/index";
import headerImage from "../../assets/images/Main picture.jpg";
import Ad from "../../assets/images/AD 2.jpg";
const SideBar = props => {
  return (
    <div className="side-bar-wrapper">
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
      </div>
    </div>
  );
};

export default SideBar;
