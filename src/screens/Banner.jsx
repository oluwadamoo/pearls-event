import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Banner() {
  return (
    <Container>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/pearls.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
`;
const Wrapper = styled.div`
  background-color: #7e4b7e31;
  height: 45vh;
`;

export default Banner;
