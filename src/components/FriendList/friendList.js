import PropTypes from 'prop-types'
import s from './FreindsList.module.css'

export default function FriendsList(props) { 
  const { friends } = props;
  return (<ul className={s.container} >
  {
      (friends.map((friend) => (
        <li className="item" key={friend.name}>
          <span className="status"
            style={{ backgroundColor: friend.isOnline ? '#1ee352' : '#eb3915' }}
          >
          </span>
          <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
          <p className="name">{friend.name}</p>
      </li>
    )))
  }
</ul>)
}

FriendsList.propType = { 
  friends: PropTypes.arrayOf(
    PropTypes.exact(
      {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
  )
}
