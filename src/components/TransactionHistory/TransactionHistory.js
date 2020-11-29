import Transaction from './Transaction'
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          <th className={styles.headItem}>Type</th>
          <th className={styles.headItem}>Amount</th>
          <th className={styles.headItem}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody className={styles.tableBody} key={item.id}>
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tbody>
        ))
      }
    </table>
  )
 }

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
      }
    )
  )
}
