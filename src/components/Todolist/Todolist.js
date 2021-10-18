import s from './Todolist.module.css';
import PropTypes from 'prop-types';
// import { Form } from '../Forms/Form';
// import { App } from '../../App';
// import React, { Component } from 'react';

function Todolist({ contactsOll, onDeleteContact }) {
  return (
    <ul className={s.contacts__list}>
      {contactsOll.map(({ id, name, number, association }) => {
        return (
          <li key={id}>
            {' '}
            <p>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {number} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default Todolist;

Todolist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
