import { Label, FilterInput } from './Flter.styled';
import { filterSelector } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filterSlice';



export function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(getFilter(e.currentTarget.value));
  };

  return (
    <form >
      <Label htmlFor="filter-input">
        Find contacts by name
        <FilterInput id="filter-input" type="text" name='filter' value={filter} onChange={onChange} />
      </Label>
    </form>
  );
};