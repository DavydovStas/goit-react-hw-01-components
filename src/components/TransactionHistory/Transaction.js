import PropTypes from 'prop-types'

export default function Transaction(props) {
  const { type, amount, currency } = props;
  return (<tr className='transaction'>
            <td className="transaction-discription">{type}</td>
            <td className="transaction-discription">{amount}</td>
            <td className="transaction-discription">{currency}</td>
          </tr>)
}
 
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
}