'use client'

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function Example34() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}