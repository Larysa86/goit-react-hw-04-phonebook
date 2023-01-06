import PropTypes from 'prop-types';
import css from './ContactItem.module.css';


export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => onDeleteContact(id)}>Delete
      </button>
    </li>
  );
    
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

