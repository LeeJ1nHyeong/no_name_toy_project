import React, { useState } from 'react'
import { styled } from 'styled-components';

const InfoContainer = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
`


function BasicInfo() {
  const [serverName, setServerName] = useState("서버");
  const [nickname, setNickname] = useState("닉네임");

  return (
    <InfoContainer>
      <div>서버명 : {serverName}</div>
      <div>닉네임 : {nickname}</div>
      <div>칭호 : </div>
      <div>전투 레벨 : </div>
      <div>아이템 레벨 : </div>
      <div>클래스 : </div>
      <div>원정대 레벨 </div>
      <div>영지 이름 </div>
      <div>영지 레벨 </div>
    </InfoContainer>
  )
}

export default BasicInfo