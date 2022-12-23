import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const inputId = nanoid();

  return (
    <Label htmlFor={inputId}>
      Find contacts by name
      <Input
        id={inputId}
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value={filterValue}
      />
    </Label>
  );
};
