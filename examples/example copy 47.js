'use client'

export function Example47() {
  return (
    <div 
      style={{  background: '#aaa',
                padding: '5px' }}
      className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button 
        style={{ margin: '5px' }}
        onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button 
        style={{ margin: '5px' }}
        onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}