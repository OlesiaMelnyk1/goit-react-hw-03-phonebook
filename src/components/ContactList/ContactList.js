import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { List, Item } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem
              id={contact.id}
              data={contact}
              deleteContact={deleteContact}
            />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
  deleteContact: PropTypes.func,
};
