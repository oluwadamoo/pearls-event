import styled from "styled-components";
import Card from "./Card";

const Cards = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 380px) {
    width: 350px;
    justify-self: center;
  }
  @media only screen and (max-width: 414px) {
    width: 384px;
    justify-self: center;
  }
`;
export default Cards;
