'use client'

import { useState } from 'react';

export function Example64() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label style={{  display: 'block' }}>
        First name:
        <input
          style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label style={{  display: 'block' }}>
        Last name:
        <input
          style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label style={{  display: 'block' }}>
        Email:
        <input
          style={{  marginLeft: '5px', marginBottom: '5px' }}
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}