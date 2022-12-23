import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getInitialValue } from '../../services/initialValue';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppContext } from '../../services/appContext';

export const App = () => {
  const [contacts, setContacts] = useState(() => getInitialValue());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number, reset) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactAudit = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!contactAudit) {
      setContacts([contact, ...contacts]);
      reset();
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const { Provider } = AppContext;

  return (
    <Provider value={{deleteContact}}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} serchName={changeFilter} />
        <ContactList
          contactsData={getFiltredContacts()}
        />
      </Container>
    </Provider>
  );
};
