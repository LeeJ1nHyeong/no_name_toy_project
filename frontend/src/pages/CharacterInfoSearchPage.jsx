import React from 'react'
import Search from '../components/characterInfoSearch/Search'
import CharacterInfo from '../components/characterInfoSearch/CharacterInfo'

function CharacterInfoSearchPage() {
  return (
    <div>
      CharacterInfoSearchPage

      {/* 검색 */}
      <Search />
      ////////////////////
      {/* 캐릭터 정보 */}
      <CharacterInfo />
    </div>
  )
}

export default CharacterInfoSearchPage