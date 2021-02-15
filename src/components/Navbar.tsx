import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { navMenuData } from "../data/navMenuData";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleClick = () => setClick(!click);
  return (
    <Nav
      className={scroll ? "scroll-bg-change" : "click-bg-change"}
      scroll={scroll}
      click={click}
    >
      <IconWrap onClick={handleClick}>
        <MenuIcon className={click ? "fas fa-times" : "fas fa-bars"} />
      </IconWrap>
      <NavMenu click={click}>
        {navMenuData.map((item, index) => (
          <NavItems key={index}>
            <NavMenuLinks
              to={item.link}
              onClick={closeMobileMenu}
              className={item.class}
              exact
            >
              {item.title}
            </NavMenuLinks>
          </NavItems>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/portfolio/contact' primary big={false}>
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav<{ scroll: boolean; click: boolean }>`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 100;
  &.scroll-bg-change {
    background: ${({ scroll }) => (scroll ? "#242424" : "transparent")};
  }
  &.click-bg-change {
    background: ${({ click }) => (click ? "#242424" : "transparent")};
    transition: all 0.5s ease;
  }
`;
const IconWrap = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    transform: translate(-50%, 50%);
  }
`;
const MenuIcon = styled.i`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #fff;
`;
const NavMenu = styled.ul<{ click: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  z-index: 10;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    top: 80px;
    align-items: center;
    height: 100vh;
    width: 100%;
    opacity: 1;
    background: ${({ click }) => (click ? "#242424" : "")};
    opacity: ${({ click }) => (click ? 1 : 0)};
    left: ${({ click }) => (click ? "0" : "-100%")};
  }
`;
const NavItems = styled.li`
  display: flex;
  justify-self: center;
  align-items: center;
`;
const NavMenuLinks = styled(NavLink)`
  &.nav-links {
    color: #fff;
    display: flex;
    height: 100%;
    justify-self: center;
    text-decoration: none;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  &.nav-links-mobile {
    display: none;
  }
  &.active {
    color: #fa923f;
  }
  :hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    &.nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      font-size: 2rem;
      z-index: 1;
    }
    &.nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 100%;
      text-decoration: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
