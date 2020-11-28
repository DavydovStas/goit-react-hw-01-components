import Profile from './components/Profile/profile'
import user from './user.json'
import Statistics from './components/Statistics/statistics'
import statisticalData from './statistical-data.json'

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
      stats={statisticalData}/>
  </div>
  )
}