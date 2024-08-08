import React, { useState } from 'react'
import styled from 'styled-components'
import ContentRecommendationItem from './ContentRecommendationItem';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 2px;
`;

const RecommendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

function ContentRecommendation() {
  const [contents, setContents] = useState([
    { name : "카멘", difficulty: "노말", requiredLevel: 1610 },
    { name : "혼돈의 상아탑", difficulty: "하드", requiredLevel: 1620 },
    { name : "에키드나", difficulty: "노말", requiredLevel: 1620 },
  ]);

  return (
    <Container>
      추천 컨텐츠 리스트
      <RecommendContainer>
        {contents.map((content, index) => {
          const { name, difficulty, requiredLevel } = content

          return (
            <div key={index}>
              <ContentRecommendationItem
                name={ name }
                difficulty={ difficulty }
                requiredLevel={ requiredLevel }
              />
            </div>
          )
        })}
      </RecommendContainer>
    </Container>
  )
}

export default ContentRecommendation