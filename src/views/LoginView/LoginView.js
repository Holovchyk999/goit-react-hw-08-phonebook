import { connect } from 'react-redux';
import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Container, Input } from '@material-ui/core';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
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
              LogIn
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
