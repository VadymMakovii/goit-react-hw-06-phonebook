import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Contact } from './ContactItem.styled';
import { useAppContext } from '../../services/appContext';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useAppContext();
  return (
    <Item>
      <Contact>&#8226; {`${name}: ${number}`}</Contact>
      <Button onClick={() => { deleteContact(id) }}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
