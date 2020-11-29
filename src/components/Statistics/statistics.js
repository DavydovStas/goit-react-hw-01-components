import PropTypes from 'prop-types'
import styles from './Statistics.module.css'
import getRandomInt from './getRandomInt'

export default function Statistical(props) {
  const { title, stats} = props;
  return (<section className={styles.statistic}>
    {title && (
      <h2 className="title">{title}</h2>
    )}
    
    <ul className={styles.statisticsList}>

      {
        stats.map((stat) => (
          <li className={styles.statisticsItem} key={stat.id}
            style={{ backgroundColor: 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')' }}
          >
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
        ))
      }

    </ul>
  </section>)
};

Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact(
      {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }
    )
  )
}