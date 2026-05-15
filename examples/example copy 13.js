'use client'

function getImageUrl(person, size = 's') {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export function Example13() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{  
        margin: '20px',
        borderRadius: '50%'
      }}
    />
  );
}

function Card({ children }) {
  return (
    <div 
      className="card"
      style={{  
        width: 'fit-content',
        margin: '5px',
        padding: '5px',
        fontSize: '20px',
        textAlign: 'center',
        border: '1px solid #aaa',
        borderRadius: '20px',
        background: '#fff' 
      }}
    >
      {children}
    </div>
  );
}