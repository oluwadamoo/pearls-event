import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

import "./carousel.css";
function Carousel() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showBullets
            showFullscreenButton={false}
            autoPlay={true}
            showPlayButton={false}
            showNav={false}
            slideDuration={1000}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  border-radius: 10px;
`;
const ImageWrapper = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 15px;
`;
export default Carousel;
