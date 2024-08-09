import React from 'react'
import BasicInfo from './BasicInfo'
import EquipmentInfo from './EquipmentInfo'
import GemInfo from './GemInfo'
import styled from 'styled-components'

const TopContainer = styled.div`
  display: flex;
`;

const EquipmentGemContainer = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
`;

const MidContainer = styled.div`
  display: flex;
`;

const BottomContainer = styled.div`
  display: flex;
`

function CharacterInfo() {

  return (
    <div>
      {/* 상단 */}
      <TopContainer>
        {/* 기본 정보 */}
        <BasicInfo />
              {/* 능력치 */}
        <div>
          {/* 특성 */}
          <div>치명</div>
          <div>특화</div>
          <div>신속</div>
          <div>제압</div>
          <div>인내</div>
          <div>숙련</div>
          --------------------
          {/* 성향 */}
          <div>지성</div>
          <div>담력</div>
          <div>매력</div>
          <div>친절</div>
        </div>
        {/* 장비 및 장신구 */}
        <EquipmentGemContainer>
          <EquipmentInfo />
          <GemInfo />
        </EquipmentGemContainer>
      </TopContainer>

      {/* 중단 */}
      <MidContainer>
        {/* 전투 스킬 */}
        <div>
          전투 스킬
        </div>
        <div>
          {/* 카드 */}
          <div>
            카드 목록
            카드 효과
          </div>
          {/* 각인 */}
          <div>
            각인
            아크패시브 : on/off
          </div>
        </div>
      </MidContainer>

      {/* 하단 */}
      <BottomContainer>
        {/* 수집품 */}
        <div>
          수집품
        </div>
      </BottomContainer>
    </div>
  )
}

export default CharacterInfo