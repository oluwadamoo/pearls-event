import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Banner({ openMenu, setOpenMenu }) {
  return (
    <Container>
      <Wrapper>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/pearls.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;

  @media only screen and (max-width: 380px) {
    height: 70vh;
  }
`;
const Wrapper = styled.div`
  background-color: #7e4b7e31;
  height: 45vh;

  @media only screen and (max-width: 380px) {
    height: 70vh;
    background-color: #d4426145;
  }
`;

export default Banner;
