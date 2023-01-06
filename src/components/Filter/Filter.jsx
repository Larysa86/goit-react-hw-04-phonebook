import PropTypes from 'prop-types';
import css from './Filter.module.css';


export const Filter = ({ onChange, value }) => {
  return (
    <label className={css.filterLabel} htmlFor="filter">
      Find contacs by name
      <input className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};