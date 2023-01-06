import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact, totalContacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
       <p className={css.totalContacts}>Кількість контактів: {totalContacts}</p>
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
