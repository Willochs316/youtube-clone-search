import React from "react";
import YoutubeLogo from "./youtubeLogo.svg";
// styles
import { NavContainer, Logo } from "./navStyles";

const Nav = ({ children }) => {
  return (
    <NavContainer>
      <Logo src={YoutubeLogo} alt="" />
      {children}
    </NavContainer>
  );
};

export default React.memo(Nav);
