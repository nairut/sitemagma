import React from "react";
import "./style.css";
import { MenuAutomatic } from "../MenuAutomatic";
import { AutomaticHero } from "../AutomaticHero";


export const Automatic = () => {
  return (
    <div className="menu-automatic">
<MenuAutomatic/>
<AutomaticHero/>
    </div>
  );
};
