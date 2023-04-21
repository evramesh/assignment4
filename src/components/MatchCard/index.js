import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {completingTeam, completingTeamLogo, result, matchStatus} = cardDetails
  return (
    <li className="li1">
      <p>{completingTeam}</p>
      <img
        className="icon22"
        src={completingTeamLogo}
        alt={`competing team ${completingTeam}`}
      />
      <p>{matchStatus}</p>
      <p>{result}</p>
    </li>
  )
}

export default MatchCard
