import Transaction from './Transaction'
import PropTypes from 'prop-types'

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="table-head">
        <tr className="table-head-row">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody className="table-body" key={item.id}>
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
