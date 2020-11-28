import Profile from './components/Profile/profile'
import user from './components/Profile/user.json'
import Statistics from './components/Statistics/statistics'
import statisticalData from './components/Statistics/statistical-data.json'
import FriendList from './components/FriendList/friendList'
import friends from './components/FriendList/friends.json'

export default function App() { 
  return (<div>
  <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
  <Statistics 
      title={statisticalData.title}
      stats={statisticalData} />
    <FriendList
      friends={friends}
    />
  </div>
  )
}