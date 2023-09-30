import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getListContacts } from 'data/StorageData';

const initialState = {
  contacts: getListContacts(),
};

const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      return {
        contacts: [...state.contacts, { id: nanoid(4), ...action.payload }],
      };
    },

    delContact(state, action) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const { addContact, delContact } = slice.actions;
export const contactsReducer = slice.reducer;
