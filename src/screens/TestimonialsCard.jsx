import React from "react";
import styled from "styled-components";

function TestimonialsCard() {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Head>
            <ImageContainer>
              <Image src="/images/user.png" />
            </ImageContainer>
          </Head>
          <Body>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              aliquam odio, quae officiis dolorem nostrum ad distinctio esse
              modi sed. Commodi modi sit sunt quas asperna
            </BodyText>
          </Body>
        </Top>

        <Footer>
          <FooterText>Jane Foster (Goddess of Thunder)</FooterText>
        </Footer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  margin: 0 15px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 15px -8px #474646ab;
  /* background-color: #fff; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  justify-content: space-around;

  &:hover {
    transform: scale(1.1);
  }
`;
const Top = styled.div`
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 30px;
`;

const Body = styled.div`
  min-height: 150px;
`;
const BodyText = styled.p`
  text-align: center;
`;
const Footer = styled.div`
  width: 260px;
  padding: 0 20px;
  justify-self: flex-end;
  align-self: flex-end;
  background-color: red;
`;
const FooterText = styled.p`
  text-align: center;
  color: white;
`;
export default TestimonialsCard;
