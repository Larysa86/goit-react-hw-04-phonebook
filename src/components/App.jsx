import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from './index';
import css from './App.module.css';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const currentName = name;
    const matchName = contacts.find(({ name }) => name === currentName);

    matchName
      ? alert(`${name} is already in contacts!`)
      : setContacts([newContact, ...contacts]);
  };

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  }

  const visibleContacts = getVisibleContacts();
  const totalContacts = contacts.length;

  return (
    <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          onDeleteContact={deleteContact}
          contacts={visibleContacts}
          totalContacts={totalContacts}
        />
      </div>
  );
};


