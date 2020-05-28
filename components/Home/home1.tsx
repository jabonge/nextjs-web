import styled from '../../styles/theme-compoenents';
import React from 'react';

const Home1Container = styled.div`
  ${props => props.theme.media.desktop`
      max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 150px;
  padding-top: 130px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  
  `}
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 50px;
`;

const MainBG = styled.div`
  ${props => props.theme.media.desktop`
      
      position: relative;

background: url('https://image.thecupping.co.kr/partners/web/img-bg@2x.png');
background-size: 540px 745px;
width: 540px;
display: block;

      
  `}
  background: url('https://image.thecupping.co.kr/partners/web/img-bg@2x.png') no-repeat;
  width: 100%;
  height: 745px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCharc = styled.div`
  ${props => props.theme.media.desktop`
      
      
  top: 205px;
  left: 74px;
  

      
  `}
  position: absolute;

  background: url('https://image.thecupping.co.kr/partners/web/main-character@2x.png');
  background-size: 431px 466px;
  width: 431px;
  height: 466px;
`;

const TextContainer = styled.div`
  position: relative;
  ${props => props.theme.media.desktop`
      
top:0;
left: -30px;
  `}
  top: -120px;

  & > h4 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 18px;
    line-height: 1;
  }

  & > p {
    margin-top: 50px;
    font-weight: 300;
    font-size: 77px;
    line-height: 1.2;
    & > strong {
      font-weight: bold;
    }
  }

  & > a {
    width: 520px;
    height: 95px;
    margin-top: 70px;
    border-radius: 5px;
    border: 1px solid #000;
    font-weight: 700;
    font-size: 28px;
    line-height: 95px;
    display: block;
    color: #000;
    text-align: center;
  }
`;

function Home1() {
  return (
    <Home1Container>
      <MainBG>
        <MainCharc />
      </MainBG>

      <TextContainer>
        <h4>모든 오프라인을 쇼핑하다</h4>
        <p>
          광고료, 입점비가 없는
          <br />
          <strong>착한 배달 위메프오!</strong>
        </p>
        <a>위메프오 입점 사장님, 로그인해주세요!</a>
      </TextContainer>
    </Home1Container>
  );
}

export default Home1;
