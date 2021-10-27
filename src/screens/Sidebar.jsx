import { Cancel } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Sidebar({ openMenu, setOpenMenu }) {
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Container openMenu={openMenu}>
      <Wrapper>
        <Menu onClick={closeMenu}>
          <span style={{ marginRight: 10, fontWeight: "500" }}>MENU</span>
          <Cancel style={{ fontSize: "30px" }} />
        </Menu>
        <Items>
          <Item>Home</Item>
          <Item>
            {" "}
            <a href="#testimonial">Testimonial</a>
          </Item>
          <Item>Wedding Packages</Item>
          <Item>Lead Planner</Item>
          <Item>Blog</Item>
          <Item>
            <a href="#reason">Gallery</a>
          </Item>
        </Items>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  transition: all 2s ease;
  background-color: #ff0062;
  z-index: 5000;
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 10;
  right: 0;
  color: white;

  display: ${(props) => (props.openMenu === true ? "block" : "none")};
`;
const Wrapper = styled.div`
  padding-top: 50px;
`;
const Menu = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  margin-left: 60vw;
`;
const Items = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  font-size: 20px;
  margin: 30px 0;

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
// const Footer = styled.div``;
export default Sidebar;
