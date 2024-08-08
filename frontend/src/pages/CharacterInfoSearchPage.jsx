import React from 'react'
import Search from '../components/characterInfoSearch/Search'
import CharacterInfo from '../components/characterInfoSearch/CharacterInfo'
import ContentRecommendation from '../components/characterInfoSearch/ContentRecommendation'

function CharacterInfoSearchPage() {
  return (
    <div>
      CharacterInfoSearchPage

      {/* 검색 */}
      <Search />
      ////////////////////
      {/* 추천 컨텐츠 정보 */}
      <ContentRecommendation />
      {/* 캐릭터 정보 */}
      <CharacterInfo />
    </div>
  )
}

export default CharacterInfoSearchPage