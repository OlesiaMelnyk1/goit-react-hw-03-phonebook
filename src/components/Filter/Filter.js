import PropTypes from 'prop-types';
import { Input, Label } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        required
        onChange={changeFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
