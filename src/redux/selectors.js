import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getAllContacts = state => state.phonebook.contacts;

const getError = state => state.phonebook.error;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const selectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getAllContacts,
  getError,
};

export default selectors;
