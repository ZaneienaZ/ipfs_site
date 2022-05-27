
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav>
        <NavLink to="/About">About Me</NavLink>
        <NavLink to="/">Go Game</NavLink>
        <a href="https://github.com/ZaneienaZ">github</a>
        <a href="https://www.w3schools.com/colors/colors_picker.asp">Colors</a>
        <a href="https://lightningdesignsystem.com/utilities/text/">styling</a>
    </nav>
    )
  }

  export default Navbar;