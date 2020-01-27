import React from "react";
import "./style.css";
import HeaderNav from "../navbar/index";
const SideBar = props => {
  return (
    <div>
      <div>
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
      </div>
      <div className="nav-header">
        <HeaderNav />
      </div>
    </div>
  );
};

export default SideBar;
