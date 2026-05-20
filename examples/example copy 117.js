'use client'

import { useRef } from 'react';

export function Example117() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav style={{textAlign: 'center'}}>
        <button style={{margin: '.25rem'}} onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button style={{margin: '.25rem'}} onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button style={{margin: '.25rem'}} onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>
      <div style={{width: '100%',
                  overflow: 'hidden'}}>
        <ul style={{listStyleType: 'none', whiteSpace: 'nowrap'}}>
          <li style={{listStyleType: 'none', whiteSpace: 'nowrap', display: 'inline', padding: '0.5rem'}}>
            <img
              src="/images/200.jpg"
              alt="Neo"
              ref={firstCatRef}
            />
          </li>
          <li style={{listStyleType: 'none', whiteSpace: 'nowrap', display: 'inline', padding: '0.5rem'}}>
            <img
              src="/images/201.jpg"
              alt="Millie"
              ref={secondCatRef}
            />
          </li>
          <li style={{listStyleType: 'none', whiteSpace: 'nowrap', display: 'inline', padding: '0.5rem'}}>
            <img
              src="/images/202.jpg"
              alt="Bella"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}