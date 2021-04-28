import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.listItem} key={id}>
      {name}: {number}{' '}
      <button className={styles.btn} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string,
//   onRemove: PropTypes.func,
// };

// getFilteredContacts = () => {
//   const { contacts, filter } = this.state;
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const normalisedFilter = filter.toLowerCase;
//   const visibleContacts = items.filter(({ text }) =>
//     text.toLowerCase().includes(normalisedFilter),
//   );
//   // return { contacts: state.contacts.items };
//   return {
//     contacts: visibleContacts,
//   };
// };
// const getVisibleContacts = (allContacts, filter) => {
//   // const normalisedFilter = filter.toLowerCase();
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });
const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),

  // const visibleContacts = items.filter(({ name }) =>
  //   name.toLowerCase.includes(filter.toLowerCase()),
  // );
  // const { items, filter } = state.contacts;
  // return {
  //   contacts: items.filter(({ name }) => name.includes(filter.toLowerCase())),
  // };
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactsOperations.contactRemove(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
