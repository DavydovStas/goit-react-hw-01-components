import PropTypes from 'prop-types'
import style from './FreindsList.module.css'

export default function FriendsList(props) { 
  const { friends } = props;
  return (<ul className={style.friendsList} >
  {
      (friends.map((friend) => (
        <li className={style.friendItem} key={friend.name}>
          <span className={style.friendStatus}
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
