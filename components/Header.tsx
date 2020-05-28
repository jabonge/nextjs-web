import React, { useState } from 'react';
import styled from '../styles/theme-compoenents';
import Link from 'next/link';

interface IHover {
  isHover: boolean;
}

const HeaderContainer = styled.div<IHover>`
  display: none;
  @media only screen and (min-width: 1024px) {
    background-color: white;

    overflow: hidden;
    display: block;
    box-sizing: border-box;
    padding-top: 55px;
    padding-bottom: 30px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: ${props => (props.isHover ? 1 : 0)}px solid grey;
    height: ${props => (props.isHover ? 440 : 130)}px;

    width: 100%;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  padding-bottom: 30px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const BrandImg = styled.img.attrs({ src: '/wemafeo.png' })`
  /* margin-top: 18px; */
`;

const NavItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 11px;
`;

const SubNavContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 10px;
  & > h5 {
    color: grey;
    font-size: 15px;
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const MenuColumn = styled.ul`
  text-align: end;
  & > :not(:nth-child(1)) {
    color: gray;
    margin-bottom: 15px;

    font-size: 16px;
    &:hover {
      color: #e74c3c;
      text-decoration: underline;
    }
  }
  & > :nth-child(1) {
    color: #000;
    font-weight: bold;
    margin-left: 80px;
    margin-bottom: 30px;
    font-size: 23px;
    &:hover {
      color: #e74c3c;
      text-decoration: underline;
    }
    list-style: none;
    text-decoration: none;
  }
`;

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const onMouseEnter = () => {
    setShowMenu(true);
  };

  const onMouseOut = () => {
    setShowMenu(false);
  };

  return (
    <HeaderContainer isHover={showMenu}>
      <HeaderContent>
        <SubNavContainer>
          <h5>서비스 소개</h5>
          <h5>제휴 문의</h5>
          <Link href="/about">
            <a>
              <h5>로그인</h5>
            </a>
          </Link>

          <h5>회원가입</h5>
        </SubNavContainer>
        <div>
          <BrandImg />
          <NavItemContainer
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseOut}
          >
            <MenuColumn>
              <li>매출관리</li>
              <li>주문,구매 현황</li>
              <li>이달의 매출현황</li>
              <li>매출 정산내역</li>
              <li>부가세 신고자료</li>
            </MenuColumn>
            <MenuColumn>
              <li>배달,픽업관리</li>
              <li>메뉴 노출 설정</li>
              <li>메뉴 품절 설정</li>
              <li>메뉴 수정 요청</li>
              <li>배달료 설정</li>
              <li>영업시간 설정</li>
              <li>휴무일 설정</li>
              <li>영업임시중지</li>
              <li>매니저 관리</li>
              <li>공지 관리</li>
            </MenuColumn>
            <MenuColumn>
              <li>티켓관리</li>
              <li>티켓 등록 현황</li>
              <li>티켓 수정 요청</li>
              <li>티켓 사용 처리</li>
              <li>사용완료 내역</li>
            </MenuColumn>
            <MenuColumn>
              <li>후기관리</li>
              <li>배달,픽업 후기</li>
              <li>티켓 후기</li>
            </MenuColumn>
            <MenuColumn>
              <li>고객지원</li>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>1:1 채팅상담</li>
              <li>이용가이드</li>
            </MenuColumn>
          </NavItemContainer>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
