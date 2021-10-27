import React from "react";

import styled from "styled-components";
import Carousel from "./Carousel";
function ReasonCards() {
  return (
    <Container>
      <Wrapper>
        <CardWrapper>
          <TextContainer>
            <Text> We pay attention to details</Text>
          </TextContainer>
          <Carousel />
        </CardWrapper>

        <CardWrapperR>
          <Carousel />
          <TextContainer>
            <Text> We ensure you are Picture-Perfect</Text>
          </TextContainer>
        </CardWrapperR>
        <CardWrapperLeft>
          <TextContainer>
            <Text> We ensure you are Picture-Perfect</Text>
          </TextContainer>
          <Carousel />
        </CardWrapperLeft>

        <CardWrapperR>
          <TextContainer>
            <Text>
              With us, you can only sit back, relax and enjoy every bit of your
              day
            </Text>
          </TextContainer>
          <Carousel />
        </CardWrapperR>

        <CardWrapperR>
          <Carousel />
          <TextContainer>
            <Text> Guest experience is a priority, always.</Text>
          </TextContainer>
        </CardWrapperR>

        <CardWrapperLeft>
          <TextContainer>
            <Text> Guest experience is a priority, always.</Text>
          </TextContainer>
          <Carousel />
        </CardWrapperLeft>

        <ButtonContainer>
          <PackageButton>See our wedding packages</PackageButton>
          <GTButton>Get Started</GTButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  @media only screen and (max-width: 380px) {
    margin: 0;
  }
`;
const CardWrapperR = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const CardWrapperLeft = styled.div`
  display: none;

  @media only screen and (max-width: 380px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
`;
const TextContainer = styled.div`
  flex: 1;
`;
const Text = styled.h2`
  width: 70%;
  font-size: 30px;

  @media only screen and (max-width: 380px) {
    width: 100%;
    font-size: 25px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    align-items: center;
  }
`;
const PackageButton = styled.button`
  width: 300px;
  margin-right: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #c21c38;
  height: 60px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  transition: 1s ease;

  @media only screen and (max-width: 380px) {
    margin-bottom: 10px;
  }
  &:active,
  &:hover {
    background-color: #ee3453;
  }

  &:active {
    width: 200px;
  }
`;
const GTButton = styled.button`
  width: 200px;
  margin-right: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #c21c38;
  height: 60px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  transition: width 1s ease;

  &:active,
  &:hover {
    background-color: #ee3453;
  }

  &:active {
    width: 110px;
  }
`;

export default ReasonCards;
