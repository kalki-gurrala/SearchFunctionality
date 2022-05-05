import React, { useRef } from "react";
import "./Navbar.css";

function Navbar(props) {
  const inputElement = useRef("");
  const getSearchTerm = () => {
    //console.log(inputElement.current.value);
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div className="nav">
      <div className="navigation">
        <a className="items" href="#home">
          Home
        </a>
        <a className="items" href="#Fashion">
          Fashion
        </a>
        <a className="items" href="#FootWear">
          FootWear
        </a>
        <input
          ref={inputElement}
          className="search"
          type="text"
          value={props.search}
          onChange={getSearchTerm}
        />
      </div>
    </div>
  );
}

export default Navbar;
