import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle, PhonebookTitle, ContactsTitle } from './GlobalStyles';
import { Box } from 'components/Box';

export class App extends Component {
  state = {
    contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }

  addNewContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? Notiflix.Notify.failure(`${name} is already in contacts`, {
          theme: 'colored',
        })
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Box
        as="section"
        mx="auto"
        my="150px"
        width="400px"
        p={5}
        bg="yellow"
        border="normal"
        borderRadius="normal"
        borderColor="black"
        boxShadow="regular"
      >
        <Box as="div" mb={5}>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm addNewContact={this.addNewContact} />
        </Box>
        <Box as="div">
          <ContactsTitle>Contacts</ContactsTitle>
          {contacts.length !== 0 ? (
            <>
              <Filter filter={filter} changeFilter={this.changeFilter} />
              <ContactList
                contacts={this.filteredContacts()}
                deleteContact={this.deleteContact}
              />
            </>
          ) : (
            <p>NO CONTACTS in the phonebook</p>
          )}
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}
