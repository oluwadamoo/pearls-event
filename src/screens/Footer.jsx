import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <IconsContainer>
          <IconWrapper>
            <Facebook style={{ color: "white" }} />
          </IconWrapper>
          <IconWrapper>
            <Twitter style={{ color: "white" }} />
          </IconWrapper>
          <IconWrapper>
            <Instagram style={{ color: "white" }} />
          </IconWrapper>
        </IconsContainer>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContactsContainer>
            <WhatsApp style={{ fontSize: 16.5 }} /> +2345566778899
          </ContactsContainer>
          {"  "} | {"  "}
          <ContactsContainer>
            <Mail style={{ fontSize: 16.5 }} /> hello@pearlsevent.com
          </ContactsContainer>
        </div>
        <FooterText>
          <Copyright style={{ fontSize: 15 }} /> 2021 Pearlsevents All Rights
          Reserved
        </FooterText>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconsContainer = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: #c21c38;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 5px;
  border-radius: 50%;
`;
const ContactsContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const FooterText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
