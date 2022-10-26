import React, { useState, Fragment } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarStyles";
import "./Navbar.css";

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const myStyle={
    height:'100vh',
    marginTop:'0px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: "Fira Sans Condensed, sans-serif",
};
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <div style={myStyle}>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo href="/">
            Ami Sansthan
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks href="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/activities">Activities</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/articles">Articles</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/contact">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
      </div>
      
    </Fragment>
  );
};

export default NavBar;
