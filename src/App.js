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
  };

  hendlerSubmitForm = data => {
    console.log(data);
    this.setState(prevState => {
      return { contactsOll: [...prevState.contactsOll, data] };
    });
  };

  render() {
    return (
      <div className="App">
        <Form propOnSubmit={this.hendlerSubmitForm} />
        <TodoList />
      </div>
    );
  }
}

export default App;

// {/* <Phonebook addNewContact={this.addNewContact} /> */}
// state = {
//   filter: '',
//   name: '',
//   number: '',
//   contactsOll: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
// addNewContact = contactsObj => {
//   this.setState(prevState => {
//     return { contactsOll: [...prevState.contactsOll, contactsObj] };
//   });
// };
