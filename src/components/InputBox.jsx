import React, { useId } from 'react'

/**
 * InputBox component to handle currency input with accessibility features.
 * @param {string} label - Label for the input.
 * @param {number} amount - Current amount value.
 * @param {function} onAmountChange - Callback function to handle amount change.
 * @param {function} onCurrencyChange - Callback function to handle currency change.
 * @param {Array} currencyOption - Array of currency options.
 * @param {string} selectCurrency - Selected currency.
 * @param {boolean} amountDisable - Disable the amount input.
 * @param {boolean} currencyDisable - Disable the currency dropdown.
 * @param {string} className - Additional classes for styling.
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  const amountInputId = useId() // Generate a unique ID for the amount input

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input 
          className='outline-none w-full bg-transparent py-1.5' 
          id={amountInputId}
          type='number' 
          placeholder='amount' 
          disabled={amountDisable}
          value={amount}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select 
  className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
  value={selectCurrency}
  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
  disabled={currencyDisable}
>
  {currencyOption.map((currency) => (
    <option key={currency} value={currency}>{currency}</option>
  ))}
</select>

      </div>
    </div>
  )
}

export default InputBox
