import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  margin: 2px;
  padding: 2px;
  border: 1px solid gray;
`;

function ContentRecommendationItem(props) {
  const { name, difficulty, requiredLevel } = props
  
  return (
    <ItemContainer>
      { name }
      { difficulty }
      { requiredLevel }
    </ItemContainer>
  )
}

export default ContentRecommendationItem