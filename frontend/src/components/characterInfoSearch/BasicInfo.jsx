import React, { useState } from 'react'

function BasicInfo() {
  const [serverName, setServerName] = useState("서버");
  const [nickname, setNickname] = useState("서버");

  return (
    <div>
      서버명 : {serverName}
      닉네임 : {nickname}
      칭호 : 
      전투 레벨 : 
      아이템 레벨 :
      클래스 명 : 
      원정대 레벨 : 
      영지 레벨 : 
      영지 이름 : 
    </div>
  )
}

export default BasicInfo