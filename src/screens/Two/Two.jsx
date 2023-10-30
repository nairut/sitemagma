import React from "react";
import { HeroSectionNew } from "../../components/HeroSectionNew";
import "./style.css";

export const Two = () => {
  return (
    <div className="two">
      <div className="hero-section-new-wrapper">
        <HeroSectionNew
          menuExpandMoreImg="/img/expand-more.png"
          menuExpandMoreStyleRound="/img/expand-more-3.png"
          menuExpandMoreStyleRound1="/img/expand-more-1.png"
          menuExpandMoreStyleRound2="/img/expand-more-5.png"
          menuExpandMoreStyleRound3="/img/expand-more-2.png"
          menuExpandMoreStyleRound4="/img/expand-more-4.png"
        />
      </div>
    </div>
  );
};
