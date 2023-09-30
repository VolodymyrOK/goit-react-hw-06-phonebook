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
      const isDuplicated = state.contacts.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isDuplicated)
        return alert(action.payload.name + ' is already in contacts');
      return {
        contacts: [...state.contacts, { id: nanoid(4), ...action.payload }],
      };
    },

    delContact(state, action) {
      if (window.confirm('Are you sure?'))
        return {
          contacts: state.contacts.filter(({ id }) => id !== action.payload),
        };
      return;
    },
  },
});

export const { addContact, delContact } = slice.actions;
export const contactsReducer = slice.reducer;
