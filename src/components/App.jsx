import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { STORAGE_KEY } from 'data/StorageData';

export const App = () => {
  const contacts = useSelector(state => state.stateContacts.contacts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <ContactsEntry />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
