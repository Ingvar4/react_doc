'use client'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: '/images/yXOvdOSs.jpg',
  imageSize: 90,
};

export function Example() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
      />
    </>
  );
}