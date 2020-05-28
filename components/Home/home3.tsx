import styled from '../../styles/theme-compoenents';
import React from 'react';
import Carousel from 'nuka-carousel';

const CarouselContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  ${props => props.theme.media.desktop`
    max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
    `}
`;

function Home3() {
  return (
    <CarouselContainer>
      <Carousel
        autoplay={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
      >
        <img src="https://d1lr36zkig3axf.cloudfront.net/storage/banner/20200327/495857d70a382b9a1c06cad4ed5d2f80.png" />
        <img src="https://d1lr36zkig3axf.cloudfront.net/storage/banner/20200511/3c19ff87f80957a40a9296b530b2eada.png" />
        <img src="https://d1lr36zkig3axf.cloudfront.net/storage/banner/20191025/754f5bcdfbc0314141e8dfa8e2ed3704.png" />
      </Carousel>
    </CarouselContainer>
  );
}

export default Home3;
