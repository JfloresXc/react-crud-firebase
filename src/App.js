import React, {useState} from 'react'
import './App.css';

//Components
import Link from './components/Link'
import Navigation from './components/Navigation'

function App() {
  const [amount, setAmount] = useState()

  function handleAmount(amountArray){
    setAmount(amountArray)
  }

  return (
    <>
      <Navigation length = {amount}/>

      <div className="container">
          <Link handleAmount = {handleAmount}/>
      </div>
    </>
  );
}

export default App;
