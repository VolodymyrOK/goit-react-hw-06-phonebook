import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    stateContacts: contactsReducer,
    stateFilter: filterReducer,
  },
});
