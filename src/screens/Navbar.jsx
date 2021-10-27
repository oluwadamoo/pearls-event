import { Menu } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Navbar({ setOpenMenu, openMenu }) {
  const OpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="/images/logo.png" />
        </Left>
        <Right>
          <MenuSection onClick={OpenMenu}>
            <span style={{ fontSize: "15px", fontWeight: "500" }}>MENU</span>
            <Menu
              style={{ marginLeft: "10px", fontSize: 30, fontWeight: "bold" }}
            />
          </MenuSection>
          <NavLinks>
            <NavLink>Home</NavLink>
            <NavLink>
              <a href="#testimonial">Testimonial</a>
            </NavLink>
            <NavLink>Wedding Packages</NavLink>
            <NavLink>Lead Planner</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>
              <a href="#reason">Gallery</a>
            </NavLink>
          </NavLinks>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  z-index: 10;
  color: white;
  transition: 1s all ease;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Left = styled.div`
  margin-left: 20px;

  @media only screen and (max-width: 380px) {
    margin-left: 5px;
  }
  @media only screen and (max-width: 414px) {
    margin-left: 5px;
  }
`;
const Logo = styled.img`
  height: 100px;
  aspect-ratio: 2/1;
  @media only screen and (max-width: 380px) {
    margin-top: -13px;
    height: 60px;
    width: 180px;
  }
  @media only screen and (max-width: 414px) {
    margin-top: -13px;
    height: 60px;
    width: 180px;
  }
`;

const Right = styled.div``;

const MenuSection = styled.div`
  display: none;

  @media only screen and (max-width: 380px) {
    display: flex;
    align-items: center;
    width: 80px;
    justify-content: space-between;
    font-size: 10;
    cursor: pointer;
    transition: all 10s ease;
    /* padding-right: 12px; */
  }
  @media only screen and (max-width: 414px) {
    display: flex;
    align-items: center;
    width: 80px;
    justify-content: space-between;
    font-size: 10;
    cursor: pointer;
    transition: all 10s ease;
    /* padding-right: 12px; */
  }
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;

  @media only screen and (max-width: 380px) {
    display: none;
  }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin-right: 25px;
  cursor: pointer;

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Navbar;
