import PropTypes from 'prop-types';
import { DeleteButton } from 'components/ContactList/ContactList.styled';

export const ContactItem = ({ data, deleteContact }) => {
  const { id, name, number } = data;
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <DeleteButton
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </>
  );
};

ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
