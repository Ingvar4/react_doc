'use client'

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function Example35() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}