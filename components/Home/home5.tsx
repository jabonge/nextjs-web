import React from 'react';
import styled from '../../styles/theme-compoenents';

const Home5Container = styled.div`
  background-color: #ffda66;

  margin-top: 100px;
  margin-bottom: 100px;

  width: 100vw;
  height: 500px;

  & > div {
    ${props => props.theme.media.desktop`
      max-width: 1200px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    
    `}
    height: 100%;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #ffda66
      url('https://image.thecupping.co.kr/partners/web/img-main-banner-character.png')
      no-repeat 100% 100%;
    background-size: 317px 293px;

    & > h1 {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #262010;
    }
    & > h2 {
      font-weight: 300;
      font-size: 40px;
      line-height: 48px;
      color: #262010;
    }
    & > h3 {
      margin-top: 19px;
      font-size: 20px;
    }

    & > a {
      display: block;
      width: 200px;
      height: 50px;
      margin: 30px auto 0;
      border-radius: 25px;
      font-weight: 700;
      font-size: 18px;
      line-height: 50px;
      background-color: #000;
      color: #fff;
    }
  }
`;

function Home5() {
  return (
    <Home5Container>
      <div>
        <h2>착한 배달 위메프와 함께</h2>

        <h1>부담 없이 시작해보세요!</h1>
        <br />
        <h3>
          위메프오는 광고비, 입점비가 없습니다.
          <br />
          지원되는 다양한 혜택을 받아보세요.
        </h3>
        <a>입점 신청하기</a>
      </div>
    </Home5Container>
  );
}

export default Home5;
