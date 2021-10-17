import s from './Todolist.module.css';
// import { Form } from '../Forms/Form';
import { App } from '../../App';
//  import React, { Component } from 'react';

function TodoList({ contactsOll }) {
  // console.log( "asdasd",contactsOll)
  //   this.props.renderList(contactsOll);
  return (
    <ul className={s.contacts__list}>
      {/* {contactsOll.map(contact => {
                    return (
                        <li key={contact.id}> <p>Association{contact.association} <span>name:{contact.name}</span> <span>{ contact.number}</span></p>
                         </li>
                )
            })
            } */}
    </ul>
  );
}
export default TodoList;
// {/* <ul className="contacts__list"></ul> */}
