import PropTypes from 'prop-types'
import styles from './Transaction.module.css'

export default function Transaction(props) {
  const { type, amount, currency } = props;
  return (<tr className={styles.transactionRow}>
            <td className={styles.transactionDiscription}>{type}</td>
            <td className={styles.transactionDiscription}>{amount}</td>
            <td className={styles.transactionDiscription}>{currency}</td>
          </tr>)
}
 
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
}