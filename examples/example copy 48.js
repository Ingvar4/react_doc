'use client'

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}


export function Example48() {
  return (
    <div 
      style={{  background: '#aaa',
                padding: '5px' }}
      className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button style={{ margin: '5px' }} onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button style={{ margin: '5px' }} onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}