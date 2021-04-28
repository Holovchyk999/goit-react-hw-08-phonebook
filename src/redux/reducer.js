import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {

  fetchContactSuccess,
  fetchContactError,
  addContactSucces,
  addContactError,
  deleteContactSucces,
  deleteContactError,
  changeFilter,
  clearError,
} from './actions';

const initialState = {
  contacts: [],
  filter: '',
  error: null,
};

const contacts = createReducer(initialState.contacts, {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSucces]: (state, { payload }) => [...state, payload],
  [deleteContactSucces]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [clearError]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  error,
});
