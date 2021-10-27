import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "./Banner";

import Cards from "./Cards";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ReasonCards from "./ReasonCards";
import TestimonialsCard from "./TestimonialsCard";
function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);
  return (
    <Container>
      <Wrapper>
        <Top>
          <Side>
            <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Side>
          <Banner openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <TitleContainer>
            <Title>We give your event a smooth flow.</Title>
          </TitleContainer>

          <CardContainer>
            <Cards />
          </CardContainer>

          <TextContainer>
            <Text>
              It all starts with a call! Let's turn your wedding imaginations
              into realities and give you the most amazing experience.
            </Text>
            <Button>
              <BtnText>Get Started</BtnText>
            </Button>
          </TextContainer>
        </Top>

        <Reason id="reason">
          <ReasonHeader>More reason why you should hire us?</ReasonHeader>
          <ReasonCards />
        </Reason>

        <Testimonials id="testimonial">
          <TestimonialHeader>Testimonials</TestimonialHeader>
          <TestimonialsCardContainer>
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </TestimonialsCardContainer>
        </Testimonials>

        <Footer />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  color: #9b9999;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  background-color: #eeeeee;
  width: 100%;
`;

const Side = styled.div`
  display: none;
  @media only screen and (max-width: 380px) {
    transition: 1s all ease-in;
    display: block;
  }
`;
const Wrapper = styled.div``;

const Title = styled.h2`
  font-size: 60px;
  text-align: center;
  font-weight: 900;
  width: 80%;
  align-self: center;

  @media only screen and (max-width: 380px) {
    font-size: 35px;
    width: 100%;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  color: white;
  align-self: center;
  margin-top: -30vh;
  margin-bottom: 10vh;

  @media only screen and (max-width: 380px) {
    margin-top: -50vh;
  }
`;

const CardContainer = styled.div`
  margin-top: -100px;

  @media only screen and (max-width: 380px) {
    margin-top: -35px;
  }
`;

const TextContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 40px;
`;

const Text = styled.p`
  text-align: center;
  width: 75%;
`;

const Button = styled.button`
  width: 350px;
  background-color: #c21c38;
  height: 65px;
  cursor: pointer;
  border: none;
  border-radius: 7px;

  transition: all 1s ease;
  &:active,
  &:hover {
    background-color: #ee3453;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const BtnText = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  transition: all 1s ease;

  &:active {
    transform: scale(1.3);
  }
`;
const Reason = styled.div`
  padding: 15px;
  padding-left: 20%;
  padding-right: 20%;

  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;

const ReasonHeader = styled.h4`
  font-size: 27px;
  font-weight: 300;

  @media only screen and (max-width: 380px) {
    font-size: 24px;
  }
`;

const Testimonials = styled.div`
  padding: 15px;
  padding-left: 20%;
  padding-right: 20%;
  background-color: #eeeeee;
`;

const TestimonialsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TestimonialHeader = styled.h4`
  font-size: 27px;
  font-weight: 300;
  text-align: center;
`;
export default Home;
