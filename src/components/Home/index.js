import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Teamcard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {is: true, newList: ''}

  componentDidMount() {
    this.gettingData()
  }

  gettingData = async () => {
    const {newList, is} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({newList: formattedData, is: false})
  }

  render() {
    const {is, newList} = this.state
    return (
      <div className="main">
        {is ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home">
            <div className="sub">
              <img
                className="icon"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="ul">
              {newList.map(each => (
                <Teamcard key={each.id} send={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
