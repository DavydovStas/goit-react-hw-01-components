import PropTypes from 'prop-types'

export default function Statistical(props) {
  const { title, stats} = props;
  return (<section className="statistics">
    {title && (
      <h2 className="title">{title}</h2>
    )}
    
    <ul className="stat-list">

      {
        stats.map((stat) => (
        <li className="item" key={stat.id}>
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