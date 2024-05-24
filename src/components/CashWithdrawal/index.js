// Write your code here

import React, {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="cash-withdrawal-container">
        <div className="account-details">
          <div className="account-holder">
            <p className="account-holder-name">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="balance-label">Your Balance</p>
            <p className="balance-amount">{balance} Rupees</p>
          </div>
        </div>
        <div className="withdraw-section">
          <p className="withdraw-label">Withdraw</p>
          <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                denomination={denomination}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
