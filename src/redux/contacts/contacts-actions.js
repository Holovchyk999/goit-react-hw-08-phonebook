
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');
export const contactRemoveRequest = createAction(
  'contacts/contactRemoveRequest',
);
export const contactRemoveSuccess = createAction(
  'contacts/contactRemoveSuccess',
);
export const contactRemoveError = createAction('contacts/contactRemoveError');


export const changeFilter = createAction('contacts/filter');

