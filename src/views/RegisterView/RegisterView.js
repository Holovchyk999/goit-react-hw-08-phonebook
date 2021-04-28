import { connect } from 'react-redux';
import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';
import { Paper, Button, Container, Input } from '@material-ui/core';
class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          style={{
            padding: 50,
            display: 'flex',
            textAlign: 'center',
          }}
        >
          <form
            onSubmit={this.handleSubmit}
          >
            <Input
              style={{ marginBottom: '20px' }}
              fullWidth="true"
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
            <Input
              style={{ marginBottom: '20px' }}
              fullWidth="true"
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={this.handleChange}
            />
            <Input
              style={{ marginBottom: '20px' }}
              fullWidth="true"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
