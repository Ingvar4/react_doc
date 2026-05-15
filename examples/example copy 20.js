'use client'

function Profile() {
  return (
    <img
      src="/images/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export function Example20() {
  return (
    <Profile />
  );
}