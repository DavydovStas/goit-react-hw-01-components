import PropTypes from 'prop-types'

export default function FriendsList(props) { 
  const { friends } = props;
  return (<ul class="friend-list">
  {
      (friends.map((friend) => (
        <li class="item" key={friend.name}>
          <span className="status"
            // backgroundColor = '#1ee352'
            // isOnline={friend.isOnline} 
          // style={backgroundColor: isOnline ? '#1ee352' : '#eb3915'}
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
  friends: PropTypes.array
}
