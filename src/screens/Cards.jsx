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
`;
export default Cards;
