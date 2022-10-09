

// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import styled from "styled-components";

// import { useState, useEffect } from "react";

// const Styles = styled.div`
//   .navbar {
//     background-color: #f0a04b;
//   }

//   a,
//   .navbar-brand,
//   .navbar-nav .nav-link {
//     color: #fefbe9;

//     &:hover {
//       color: black;
//     }
//   }
// `;



import React, { useState, Fragment } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarStyles";
import "./Navbar.css";
import Logo from "../../logo.jpeg";
import cover from "./cover.JPG";

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
    backgroundImage: `url(${cover})`,
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
          {/* <NavLogo href="/">
            <img
              src={Logo}
              width={100}
              height={60}
              //className="d-inline-block align-middle"
              alt=""
            />
          </NavLogo> */}
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
