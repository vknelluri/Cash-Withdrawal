// Write your code here

import React from 'react'
import './index.css'

const DenominationItem = props => {
  const {denomination, withdrawAmount} = props
  const {value} = denomination

  const onWithdraw = () => {
    withdrawAmount(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onWithdraw}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
