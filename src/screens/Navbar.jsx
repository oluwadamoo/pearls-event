import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="/images/logo.png" />
        </Left>
        <Right>
          <NavLinks>
            <NavLink>Home</NavLink>
            <NavLink>Testimonial</NavLink>
            <NavLink>Wedding Packages</NavLink>
            <NavLink>Lead Planner</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Gallery</NavLink>
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
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Left = styled.div`
  margin-left: 20px;
`;
const Logo = styled.img`
  height: 100px;
  aspect-ratio: 2/1;
`;

const Right = styled.div``;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
`;

const NavLink = styled.li`
  margin-right: 25px;
`;

export default Navbar;
