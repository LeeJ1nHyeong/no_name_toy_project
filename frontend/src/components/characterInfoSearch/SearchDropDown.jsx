import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const DropDownBox = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 100px;
  width: 200px;
`;

function SearchDropDown() {
  const [recentSearch, setRecentSearch] = useState([
    "닉네임 1", "닉네임 2"
  ]);

  return (
    <Container>
      <DropDownBox>
        {recentSearch.length > 0 ? (
          <div>
            {recentSearch.slice(0, 3).map((search, index) => (
              <div key={index}>
                {search}
                <button>삭제</button>
              </div>
            ))}
          </div>
          ) : (
          <div>
            최근 검색 목록 없음
          </div>
        )}
      </DropDownBox>
    </Container>
  )
}

export default SearchDropDown