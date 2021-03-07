import React, { useEffect, useState } from 'react';
import { navMenuData } from 'data/navMenuData';
import Button from 'components/Button';
import {
  IconWrap,
  MenuIcon,
  Nav,
  NavMenuLinks,
  NavMenu,
  NavBtn,
  NavItems,
} from './navbar.style';

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
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const handleClick = () => setClick(!click);
  return (
    <Nav
      className={scroll ? 'scroll-bg-change' : 'click-bg-change'}
      scroll={scroll}
      click={click}
    >
      <IconWrap onClick={handleClick}>
        <MenuIcon className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </IconWrap>
      <NavMenu click={click}>
        {navMenuData.map((item) => (
          <NavItems key={item.id}>
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
        <Button
          href="https://github.com/tuboihirokidesu/portfolio"
          primary
          big={false}
        >
          GitHub
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
