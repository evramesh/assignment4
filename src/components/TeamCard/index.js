import {Link} from 'react-router-dom'
import './index.css'

const Teamcard = props => {
  const {send} = props
  const {id, name, imageUrl} = send
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li">
        <img className="logo" alt={name} src={imageUrl} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default Teamcard
