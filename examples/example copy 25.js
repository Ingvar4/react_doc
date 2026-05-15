'use client'

function Avatar() {
  return (
    <img
      className="avatar"
      src="/images/1bX5QH6.jpg"
      alt="Lin Lanying"
      style={{
        margin: '20px', 
        borderRadius: "50%",
        height: '120px'
      }}
    />
  );
}

export function Example25() {
  return (
    <Avatar />
  );
}