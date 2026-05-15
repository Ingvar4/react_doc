'use client'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function Example23() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}