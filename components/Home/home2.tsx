import styled from '../../styles/theme-compoenents';
import React from 'react';

const Home2Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  ${props => props.theme.media.desktop`
    max-width: 1200px;
    
    flex-wrap:nowrap;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  align-items: flex-end;
    `}
`;

const LeftContainer = styled.div`
  ${props => props.theme.media.desktop`
      width:40%;
      margin-right: 24px;
      overflow:hidden;
    `}
  & > h1 {
    font-size: 65px;
    font-weight: bold;
    margin-left: 50px;
    margin-bottom: 50px;
  }

  & > :nth-child(2) {
    display: none;
    ${props => props.theme.media.desktop`
      display:block;
    `}
  }
`;

const RigthContainer = styled.div`
  width: 520px;
  display: flex;

  ${props => props.theme.media.desktop`
      display:flex;
      width:50%;
    `}
`;

const NoticeItemContainer = styled.div`
  width: 600px;
  margin-left: 76px;

  & > :first-child {
    width: 37px;
    height: 37px;
    margin-bottom: 24px;
    border-radius: 50%;
    background-color: #ff4336;
  }

  & > h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 1;
    color: #ff4336;
    margin-bottom: 37px;
  }

  & > h1 {
    height: 120px;
    font-size: 32px;
    line-height: 1.25;
  }

  & > h3 {
    height: 78px;
    margin-top: 36px;
    font-size: 18px;
    line-height: 1.44;
    color: #515151;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > h4 {
    margin-top: 60px;
    font-size: 16px;
    line-height: 1;
    color: #515151;
  }
`;

function Home2() {
  return (
    <Home2Container>
      <LeftContainer>
        <h1>공지사항</h1>
        <img
          src="https://image.thecupping.co.kr/partners/web/img-notice@2x.jpg"
          height="300"
        />
      </LeftContainer>
      <RigthContainer>
        <NoticeItemContainer>
          <div />
          <h2>[공지]</h2>
          <h1>매장 노출순위를 올리는 TIP!</h1>
          <h3>
            안녕하세요. 위메프오입니다.&nbsp;위메프오의 노출순위는 다양한 정보를
            합산한 점수로 결정됩니다.&nbsp;점수는 1일 1회 오전에 반영되므로 1일
            1회 리스트상 매장 노출 순위가 변경됩니다.노출순위에 가장 큰 영향을
            미치는 아래와 같습니다.&nbsp;1. 후기후기는 쌓이는 만큼 노출점수가
            올라갑니다. 다양한 후기 이벤트를 진행해서 노출순위를 올려보세요.
            ^^&nbsp;2. 할인율 설정할인율을 설정하시면 고정된 노출점수가 +됩니다.
            할인율 설정을 원하시는 경우 위메프오 카카오채널로 문의주시면 바로
            설정이 가능하고 익일 점수에 반영됩니다.3. 주문수 및 거리후기와
            할인율 설정이 으로 인한 점수가 동일하다면 주문수가 많은 매장 및
            거리가 가까운 매장순으로 노출됩니다.&nbsp;위메프오는 사장님의 더
            많은 수익을 위해 항상 고민하고 노력하고 있습니다.감사합니다.&nbsp;
          </h3>
          <h4>2020.05.20</h4>
        </NoticeItemContainer>
        <NoticeItemContainer>
          <div />
          <h2>[공지]</h2>
          <h1>원산지 정보를 확인하고 업데이트 해주세요!</h1>
          <h3>
            사장님, 안녕하세요,&nbsp;위메프오입니다~!&nbsp;1. 우리가게의 원산지
            정보를 확인하시고 업데이트가 필요하시면 언제든지 연락주세요!▶
            카카오톡 플러스친구(채널) : "위메프오 파트너즈" 검색후 요청!▶
            파트너즈 사이트 : 로그인 후 메뉴 수정요청에서 요청 가능하십니다2.
            메뉴 수정 요청주시면서 원산지도 꼭 업데이트
            요청해주세요~!원산지표기는 고객님들이 우리 가게를 믿고 선택할 수
            있는 소중한 정보가 됩니다.[위메프오 통신판매 원산지 관련 안내]1.
            전자매체 원산지 표시방법을 안내드립니다.&nbsp; 1 표시 위치 : 배달앱
            , 인터넷 화면에 원산지를 표시해야 합니다.&nbsp; 2 조리음식에 사용된
            품목의 원산지가 같은 경우 일괄표시 가능합니다.&nbsp; &nbsp;단,
            조리음식별 원산지가 다른 경우 반드시 음식명과 함께 표시대상 품목의
            원산지를 구분하여 표시하셔야 합니다~!&nbsp; &nbsp;[예시]&nbsp;
            갈비탕(쇠고기 : 호주산), 소불고기(쇠고기 : 미국산)2. 반드시
            표시해야하는 "음식점 원산지 의무 표시 품목" (24개)를
            안내드립니다.&nbsp;&nbsp;&nbsp; 1 농축산물 (9개):쇠고기, 돼지고기,
            닭고기, 오리고기, 양고기, 염소(유산양 포함)고기, 쌀(밥, 죽, 누룽지),
            콩(두부 , 콩국수 , 콩비지), 배추김치 (배추, 고춧가루)&nbsp; 2수산물
            (15개): 넙치, 조피볼락, 참돔, 미꾸라지, 뱀장어, 낙지, 고등어, 갈치,
            명태, 참조기, 오징어, 꽃게 다랑어, 아귀, 쭈꾸미&nbsp;* 다랑어, 아귀,
            쭈꾸미는 2020년 4월 30일부터 의무 표시에 추가되었습니다.3.&nbsp;
            판매 · 제공 시 표시방법을 확인해주세요.&nbsp; 1 소비자가 배달앱 또는
            전화 등으로 주문한 음식을 배달 시에도 음식에 사용된 대상품목의
            원산지를 포장재에 표시하여야 합니다.&nbsp; 2 포장재에 표시하기
            어려운 경우 전단지, 스티커, 영수증 등에 원산지 표시
            가능합니다.&nbsp;4. 원산지 표시 위반 시 처벌대상이 될 수
            있습니다.&nbsp; 1 음식업영업자 :&nbsp; 거짓표시 ( 형사처벌 , 위반자
            공표 , 의무교육 , 과징금 )&nbsp; 2 미표시 ( 1회위반 : 과태료,&nbsp;
            2회위반 : 과태료, 공표, 의무교육 )&nbsp; &nbsp;- 위반자 인터넷 공표
            시 통신판매중개업체 정보를 함께 공개됩니다.★ 원산지 표기를
            수정하시고 싶으실 경우▶ 카카오톡 플러스친구(채널) : "위메프오
            파트너즈" 검색후 요청!▶ 파트너즈 사이트 : 로그인 후 메뉴
            수정요청에서 요청 가능하신점! 기억해주세요~!감사합니다.위메프오
            드림.
          </h3>
          <h4>2020.04.24</h4>
        </NoticeItemContainer>
      </RigthContainer>
    </Home2Container>
  );
}

export default Home2;
