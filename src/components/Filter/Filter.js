import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></Input>
    </>
  );
};