import React, { useState, useEffect } from 'react'
import Template from './Template'

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
      <Template title="Counter">
        <div className='counter'>
            <span>{contage}</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
        </div>
      </Template>
  )
}

export default Counter;
