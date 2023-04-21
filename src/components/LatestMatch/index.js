import './index.css'

const LatestMatch = props => {
  const {latestData} = props
  return (
    <div className="latest">
      <div>
        <p>{latestData.firstInnings}</p>
        <p>{latestData.date}</p>
        <p>{latestData.venue}</p>
        <p>{latestData.result}</p>
      </div>
      <div>
        <img
          className="into"
          alt={`latest match ${latestData.completingTeam}`}
          src={latestData.completingTeamLogo}
        />
      </div>
      <div>
        <p>First Innings</p>
        <p>{latestData.completingTeam}</p>
        <p>Second Innings</p>
        <p>{latestData.secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{latestData.manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{latestData.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
