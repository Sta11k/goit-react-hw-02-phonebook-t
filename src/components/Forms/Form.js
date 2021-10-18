import React from 'react';
import { Component } from 'react';
import s from './Form.module.css';
import { v4 as uuid } from 'uuid';

class Form extends Component {
  state = {
    // contacts: [],
    id: '',
    name: '',
    number: '',
    association: 'Other',
  };
  contactId = uuid();
  contactIdName = uuid();
  contactIdNumber = uuid();

  handleChange = e => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: this.contactId });
  };

  handleSabmit = e => {
    e.preventDefault();
    const { id, name, number, association } = this.state;
    const contactPhone = {
      id,
      name,
      number,
      association,
    };
    this.setState({ contactPhone });
    this.props.propOnSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ id: ' ', name: ' ', number: ' ', association: ' ' });
  };

  render() {
    return (
      <form onSubmit={this.handleSabmit}>
        <label htmlFor={this.contactIdName} className={s.form__name}>
          Name
          <input
            id={this.contactIdName}
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.contactIdNumber} className={s.form__number}>
          Number
          <input
            id={this.contactIdNumber}
            onChange={this.handleChange}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <div className={s.radio__btn}>
          <label>
            <input
              type="radio"
              name="association"
              value="Work"
              onChange={this.handleChange}
              checked={this.state.association === 'Work'}
            />
            Work
          </label>
          <label>
            <input
              type="radio"
              name="association"
              value="Family"
              onChange={this.handleChange}
              checked={this.state.association === 'Family'}
            />
            Family
          </label>
          <label>
            <input
              type="radio"
              name="association"
              value="Friends"
              onChange={this.handleChange}
              checked={this.state.association === 'Friends'}
            />
            Friends
          </label>
          <label>
            <input
              type="radio"
              name="association"
              value="Last"
              onChange={this.handleChange}
              checked={this.state.association === 'Last'}
            />
            Last
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
