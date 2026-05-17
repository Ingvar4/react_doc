'use client'

import { useState } from 'react';

export function Example44() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: '/images/Sd1AgUOm.jpg',
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
        <input
          value={person.name}
          onChange={handleNameChange}
          style={{  marginLeft: '5px', marginBottom: '5px' }}
        />
      </label>
      <label style={{  display: 'block' }}>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
          style={{  marginLeft: '5px', marginBottom: '5px' }}
        />
      </label>
      <label style={{  display: 'block' }}>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
          style={{  marginLeft: '5px', marginBottom: '5px' }}
        />
      </label>
      <label style={{  display: 'block' }}>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
          style={{  marginLeft: '5px', marginBottom: '5px' }}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
        style={{  width: '200px', height: '200px' }}
      />
    </>
  );
}