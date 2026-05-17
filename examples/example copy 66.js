'use client'

import { useState } from 'react';

export function Example66() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label style={{  display: 'block' }}>
        Name:
        <input style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label style={{  display: 'block' }}>
        Title:
        <input style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label style={{  display: 'block' }}>
        City:
        <input style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label style={{  display: 'block' }}>
        Image:
        <input style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img style={{  width: '200px', height: '200px' }}
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  ); 
}