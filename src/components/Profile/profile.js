import PropTypes from 'prop-types'
import styles from './Profile.module.css'

export default function Profile(props) {
  const { name, tag, location, avatar, stats } = props
  return (
  <div className={ styles.profile}>
  <div className={ styles.profileDescription}>
    <img
          src={avatar}
          alt={name}
          className={ styles.profileAvatar}
    />
    <p className="name"> {name}</p>
    <p className="tag">@ {tag}</p>
    <p className="location"> {location}</p>
  </div>

  <ul className={ styles.profileStatsList}>
    <li className={styles.profileStatItem}>
      <span className="label">Followers</span>
      <span className="quantity"> {stats.followers}</span>
    </li>
    <li className={styles.profileStatItem}>
      <span className="label">Views</span>
      <span className="quantity"> {stats.views}</span>
    </li>
    <li className={styles.profileStatItem}>
      <span className="label">Likes</span>
      <span className="quantity"> {stats.likes}</span>
    </li>
  </ul>
</div>)
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}