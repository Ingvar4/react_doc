'use client'

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export function Example5() {
  return <Greeting name="world" />
}