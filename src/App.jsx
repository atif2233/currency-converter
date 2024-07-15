import { useState } from 'react'
import './App.css'
import InputBox  from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bgImage from './assets/currencyConverterBg2.jpeg';
import logo from './assets/cc-logo.png'

function App() {
  const [amount , setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap =() =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const reset = () =>{
    setAmount(0)
    setConvertedAmount(0)
    setFrom('usd')
    setTo('inr')
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
    style={{backgroundImage:`url(${bgImage})`}}
    >

      <div className='w-full h-96:'>
        <div className='flex justify-center'>
        <img src={logo} className='logo-img'/>
        </div>
        
        <div className='w-full max-w-xl mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-none bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
            }
            }>
              <div className='w-full mb-1'>
                <InputBox label="From" amount={amount} currencyOption={options} 
                onCurrencyChange={(currency)=> setFrom(currency)} selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                />
                <div className='relative w-full  h-0.5'>
                  <button type='button' 
                  className='button relative left-1/2  -translate-x-32 -translate-y-1/2
                  border-white rounded-md text-white text-xl px-2 py-0.5'
                  onClick={swap}
                  >
                    Swap
                  </button>
                  <button type='button' 
                  className=' button relative left-1/2 -translate-x-0 -translate-y-1/2
                  border-white rounded-md text-white text-xl px-2 py-0.5'
                  onClick={reset}
                  >
                    Reset
                  </button>
                </div>
                <div className='w-full mt-1 mb-4'>
                <InputBox  label="To" amount={convertedAmount} currencyOption={options} 
                onCurrencyChange={(currency)=> setTo(currency)} selectCurrency={to} amountDisable/>
                </div>
                <button type='submit' 
                className='convert-button w-full text-xl text-white px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App




