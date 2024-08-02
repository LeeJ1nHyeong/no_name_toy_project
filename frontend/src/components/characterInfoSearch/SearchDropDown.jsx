import React from 'react'
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
  width: 100px;
`;

function SearchDropDown() {
  return (
    <Container>
      <DropDownBox />
    </Container>
  )
}

export default SearchDropDown