import axios from 'axios';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  contactRemoveRequest,
  contactRemoveSuccess,
  contactRemoveError,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};
const contactsAdd = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const contactRemove = contactId => dispatch => {
  dispatch(contactRemoveRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactRemoveSuccess(contactId)))
    .catch(error => dispatch(contactRemoveError(error.message)));
};
export default { contactsAdd, contactRemove, fetchContacts };
