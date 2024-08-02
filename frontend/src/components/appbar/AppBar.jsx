import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppBarContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const LogoContainer = styled.div`
  margin: 5px;
  border: 1px solid black;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin: 0 5px;
`;

function AppBar() {
  return (
    <AppBarContainer>
      <LogoContainer>
        로고
      </LogoContainer>
      <LinkContainer>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/strategy">공략</StyledLink>
        <StyledLink to="/character-info-search">캐릭터 정보 검색</StyledLink>
      </LinkContainer>
      <div>
        로아 사이트
      </div>
    </AppBarContainer>
  )
}

export default AppBar