import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
const initionalState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = initionalState;
  changeFormHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.props);
  };

  submitFormHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidForm = this.validateForm();
    if (!isValidForm) return;

    onAdd(name, number);
    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (!name || !number) {
      alert('Fill in all fields');
      return false;
    }
    const isUnique = contacts.find(contact => contact.name === name);
    isUnique && alert('Contact is alredy in cotactList');
    return !isUnique;
  };

  resetForm = () => this.setState(initionalState);

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.submitFormHandler}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.changeFormHandler}
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.changeFormHandler}
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({ contacts: state.contacts.items });
const mapDispatchToProps = dispatch => ({
  onAdd: (name, number) =>
    dispatch(contactsOperations.contactsAdd(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
