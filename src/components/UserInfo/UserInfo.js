import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button, Paper, Avatar } from '@material-ui/core';
import photo from './cat.jpg';

const UserInfo = ({ avatar, name, onLogout }) => (
  <Paper
    elevation={0}
    style={{
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }}
  >
    <Avatar style={{ marginRight: 10 }} src={avatar} alt="" />
    <h1 style={{ marginRight: 10 }}>{name}</h1>

    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={onLogout}
    >
      LogOut
    </Button>
  </Paper>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  email: authSelectors.getUseremail(state),
  avatar: photo,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
