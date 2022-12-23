import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';


export const App = () => {
  const contacts = useSelector(getContacts);
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {!contacts?.length < 1 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <Toaster />
    </Container>
  );
};

