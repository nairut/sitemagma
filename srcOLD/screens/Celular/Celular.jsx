import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Celular = () => {
  return (
    <div className="celular">
      <div className="div-2">
        <h1 className="h-1">Professional Translation Services</h1>
        <p className="element-languages-that-2">
          120 languages that fits in your budget
          <br />
          High Quality Human Translation
          <br />
          Linguists with Master&#39;s Degrees
        </p>
        <Link className="click-to-discover-wrapper" to="/cell-form">
          <div className="click-to-discover">CLICK TO DISCOVER</div>
        </Link>
        <img className="magma-translation-3" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};
