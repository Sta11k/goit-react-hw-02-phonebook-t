import './App.css';
import { Component } from 'react';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';

class App extends Component {
  state = {
    contactsOll: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
        association: 'Other',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
        association: 'Other',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
        association: 'Other',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
        association: 'Other',
      },
    ],
    filter: '',
  };

  hendlerSubmitForm = data => {
    console.log(data);
    this.setState(prevState => {
      return { contactsOll: [...prevState.contactsOll, data] };
    });
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(({ contactsOll }) => ({
      contactsOll: contactsOll.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contactsOll, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();

    return contactsOll.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter),
    );
  };

  render() {
    // const {  contactsOll } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <Form propOnSubmit={this.hendlerSubmitForm} />
        <TodoList
          contactsOll={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

// https://github.com/flamesty/goit-react-hw-02-phonebook/blob/main/src/App.js
