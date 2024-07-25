import React from 'react'
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div>
      404 Not Found
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  )
}

export default Error404Page