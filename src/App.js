import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'; 
import UserList from './containers/userList'; 
import UserDetails from './containers/userDetails'; 

class App extends Component {
  render() {
    return (
      <div> 
        <div className="">
          <Header /> 
          <h1> Users</h1>
          <UserList /> 
          <h1> User Details</h1>
          <UserDetails /> 
        </div>
      </div>
    );
}
}

export default App;
