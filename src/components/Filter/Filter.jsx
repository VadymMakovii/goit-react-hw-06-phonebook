import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

export const Filter = ({ value, serchName }) => {
  const inputId = nanoid();

  return (
    <Label htmlFor={inputId}>
      Find contacts by name
      <Input id={inputId} type="text" onChange={serchName} value={value} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  serchName: PropTypes.func.isRequired,
};
