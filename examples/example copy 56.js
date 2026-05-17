'use client'

import { useState } from 'react';

export function Example56() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1 style={{  display: 'inlineBlock', margin: '10px', width: '30px', textAlign: 'center' }}>{number}</h1>
      <button 
        style={{  display: 'inlineBlock', margin: '10px', fontSize: '20px' }}
        onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}