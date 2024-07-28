import React from 'react'
import RaidNavBar from '../components/strategy/RaidNavBar'
import RaidList from '../components/strategy/RaidList'
import GimmickArea from '../components/strategy/GimmickArea'
import Reward from '../components/strategy/Reward'

function StrategyPage() {
  return (
    <div>
      <div>
        StrategyPage
      </div>
      <RaidNavBar />
      <div>
        <div>
          <RaidList />
          <GimmickArea />
        </div>
        <Reward />
      </div>
    </div>
  )
}

export default StrategyPage