import React, { useState, useEffect } from 'react'

import './Counter.css'


const Counter = () => {
    const [contage, setContage] = useState(0)

    useEffect(() => {
        console.log('Testando UseEffect')
    } , [contage])

    const handleOnClick = operador => {
        let newValue = operador === '+'
          ? contage + 1
          : contage - 1
        setContage(newValue)
  }

    return(
        <div className='counter'>
            <span>{contage}</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
        </div>
  )
}

export default Counter;
