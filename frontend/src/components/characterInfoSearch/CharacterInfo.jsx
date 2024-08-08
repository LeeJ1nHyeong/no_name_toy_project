import React from 'react'
import BasicInfo from './BasicInfo'
import EquipmentInfo from './EquipmentInfo'
import GemInfo from './GemInfo'

function CharacterInfo() {

  return (
    <div>
      {/* 기본 정보 */}
      <BasicInfo />
      ====================
      {/* 장비 및 장신구 */}
      <div>
        <EquipmentInfo />
        <GemInfo />
      </div>
      ====================
      {/* 각인 */}
      <div>
        각인 목록
      </div>
      ====================
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
      ====================
      {/* 전투 스킬 */}
      <div>
        전투 스킬
      </div>
      ====================
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
      ====================
      {/* 수집품 */}
      <div>
        수집품
      </div>
    </div>
  )
}

export default CharacterInfo