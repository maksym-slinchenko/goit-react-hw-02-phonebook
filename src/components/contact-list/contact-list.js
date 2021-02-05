import React from 'react';
import ContactItem from '../contact-item/contact-item';
import { v4 as uuidv4 } from 'uuid';

export default function ContactList({
  contacts,
  onRemove,
}) {
  return (
    <>
      <ul>
        {contacts.map(i => (
          <ContactItem
            name={i.name}
            number={i.number}
            onRemove={onRemove}
            id={uuidv4()}
          />
        ))}
      </ul>
    </>
  );
}
