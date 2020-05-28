import React from 'react';
import styled from '../../styles/theme-compoenents';

interface IProps {
  url: string;
  color: string;
}

const Home4Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  ${props => props.theme.media.desktop`
      max-width: 1200px;
  
    margin-right: auto;
    margin-left: auto;
    
    flex-wrap: nowrap;
  
  & > :not(:last-child) {
    margin-right: 70px;
  }
    
    `}
`;

const Item = styled.div<IProps>`
  display: flex;
  justify-content: center;
  padding-top: 33px;
  margin-top: 33px;

  width: 100%;
  ${props => props.theme.media.desktop`
    width: 33.3%;    
    display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
    `}

  & > :first-child {
    width: 50%;
    margin-right: 20px;
    & > h1 {
      font-size: 32px;
      line-height: 1.25;
      color: #000;
    }

    & > h2 {
      margin-top: 16px;
      font-size: 16px;
      line-height: 1.4;
      color: #515151;
    }
  }

  & > :nth-child(2) {
    background: ${props => props.color} url(${props => props.url}) no-repeat 50%
      50%;
    background-size: 100% 100%;
    width: 160px;
    height: 160px;
  }
`;

function Home4() {
  return (
    <Home4Container>
      <Item
        url="https://image.thecupping.co.kr/partners/web/img-app-01@2x.jpg"
        color="#fcdcdc"
      >
        <div>
          <h1>주문 접수 프로그램</h1>
          <h2>
            위메프오 배달 픽업 프로그램으로 PC에서 간편하게 주문 접수하세요!
          </h2>
        </div>
        <span></span>
      </Item>
      <Item
        url="https://image.thecupping.co.kr/partners/web/img-app-02@2x.jpg"
        color="#fff8bd"
      >
        <div>
          <h1>카카오톡 1:1 채팅 상담</h1>
          <h2>궁금한 점은 무엇이든지 물어보세요!</h2>
        </div>
        <div></div>
      </Item>
      <Item
        url="https://image.thecupping.co.kr/partners/web/img-app-03@2x.png"
        color="#fed6bd"
      >
        <div>
          <h1>이용가이드 다운로드</h1>
          <h2>새로워진 위메프오 파트너즈를 편리하게 이용하세요.</h2>
        </div>
        <div></div>
      </Item>
    </Home4Container>
  );
}

export default Home4;
