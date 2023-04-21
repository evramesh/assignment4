import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {active: true, latest: {}, recent: {}, banner: ''}

  componentDidMount() {
    this.pathDataCollect()
  }

  pathDataCollect = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const bannnerUrl = data.team_banner_url
    const latestDataUpdate = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      completingTeam: data.latest_match_details.competing_team,
      completingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      matchStatus: data.latest_match_details.match_status,
      secondInnings: data.latest_match_details.second_innings,
      venue: data.latest_match_details.venue,
    }
    const recentDataUpdated = data.recent_matches.map(one => ({
      id: one.id,
      venue: one.venue,
      date: one.date,
      manOfTheMatch: one.man_of_the_match,
      firstInnings: one.first_innings,
      secondInnings: one.second_innings,
      matchStatus: one.match_status,
      completingTeam: one.competing_team,
      completingTeamLogo: one.competing_team_logo,
      result: one.result,
      umpires: one.umpires,
    }))
    this.setState({
      recent: recentDataUpdated,
      latest: latestDataUpdate,
      banner: bannnerUrl,
      active: false,
    })
  }

  loaderBar = () => (
    <div testid="loader">
      <Loader type="BallTriangle" color="#00BFFF" height={150} width={150} />
    </div>
  )

  render() {
    const {active, recent, latest, banner} = this.state
    const {id} = latest
    console.log(recent)
    return (
      <div className="match-details">
        {active ? (
          this.loaderBar()
        ) : (
          <div>
            <div>
              <img className="banner" alt="team banner" src={banner} />
            </div>
            <h1 className="heading">Latest Match</h1>
            <LatestMatch latestData={latest} />
            <ul className="unlist">
              {recent.map(fun => (
                <MatchCard key={fun.id} cardDetails={fun} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
