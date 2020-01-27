import React from "react";
import SearchBar from "./navbarSearch/index";
import "./style.css";
const headerMenu = props => {
  return (
    <div className="menu-Container">
      <nav>
        <ul>
          <li>
            <a>მთავარი</a>
          </li>
          <li>
            <a>პროგრამები</a>
          </li>
          <li>
            <a>თამაშები</a>
          </li>
          <li>
            <a>ფილმები</a>
          </li>
          <li>
            <a>ფილმები</a>
          </li>
          <li>
            <a>ტელევიზია</a>
          </li>
          <SearchBar />
        </ul>
      </nav>
    </div>
  );
};

export default headerMenu;
