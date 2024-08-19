import { Container, NavUl, useMediaQuery } from "fhf-react";
import logoSvg from "../assets/logo.svg";
import React, { useState } from "react";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <Container>
          <div className="logo">
            <img src={logoSvg} className="logo" alt="Logo" />
          </div>
          <NavUl style={{ display: isMobile ? "none" : "flex" }}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </NavUl>
          <div
            style={{ display: isMobile ? "flex" : "none", cursor: "pointer" }}
            className={menuOpen ? "menuLogo active" : "menuLogo"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Container>
        <div
          className={
            isMobile && menuOpen ? "menuContainer active" : "menuContainer"
          }
          style={isMobile ? { display: "block" } : { display: "none" }}
        >
          <div className={"menu"}>
            <NavUl>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </NavUl>
          </div>
        </div>
      </header>
    </>
  );
}
