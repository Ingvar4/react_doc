'use client'

import { useState } from 'react';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export function Example81() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}

function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  return (
    <section className="contact-list" style={{float: 'left', marginBottom: '20px'}}>
      <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>
        {contacts.map(contact =>
          <li key={contact.email} style={{listStyle: 'none', margin: '0', padding: '0'}}>
            <button style={{ width: '100px', padding: '10px', marginRight: '10px'}} onClick={() => {
              onSelect(contact);
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat" className="chat" style={{float: 'left', marginBottom: '20px'}}>
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
        style={{ height: '150px'}}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}