import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Container>
      <Wrapper>
        <Logo src="/images/download.png" />
        <Title>Our Creed</Title>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum
          omnis obcaecati quibusdam nostrum facere voluptatem assumenda nobis
          nulla! Magni soluta suscipit officiis delectus illo consequatur qui
          repudiandae unde. Eaque?
        </Text>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  background-color: #fff;
  height: 430px;
  padding: 25px;
  margin-right: 20px;
  margin-bottom: 20px;
  color: #9b9999;
  box-shadow: 0px 0px 15px -8px #a09e9eab;
  transition: all 1s ease;

  @media only screen and (max-width: 380px) {
    width: 300px;
    height: 350px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  align-self: center;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 500;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

export default Card;
