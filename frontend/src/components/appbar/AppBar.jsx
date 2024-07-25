import React from 'react'
import { Link } from 'react-router-dom'

function AppBar() {
  return (
    <div>
      AppBar
      <div>
        <Link to="/">홈</Link>
        <Link to="/strategy">공략</Link>
        <Link to="/character-info-search">캐릭터 정보 검색</Link>
      </div>
    </div>
  )
}

export default AppBar