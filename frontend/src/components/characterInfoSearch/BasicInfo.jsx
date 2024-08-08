import React, { useState } from 'react'

function BasicInfo() {
  const [serverName, setServerName] = useState("서버");
  const [nickname, setNickname] = useState("닉네임");

  return (
    <div>
      <div>서버명 : {serverName}</div>
      <div>닉네임 : {nickname}</div>
      <div>칭호 : </div>
      <div>전투 레벨 : </div>
      <div>아이템 레벨 : </div>
      <div>클래스 : </div>
      <div>원정대 레벨 </div>
      <div>영지 이름 </div>
      <div>영지 레벨 </div>
    </div>
  )
}

export default BasicInfo