'use client'

import { useState } from 'react';

export function Example100() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      style={{width: '100px',
              textAlign: 'center',
              border: '1px solid gray',
              borderRadius: '4px',
              padding: '20px',
              margin: '0 20px 20px 0',
              float: 'left'}}
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}