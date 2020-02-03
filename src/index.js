import React, { Component } from 'react';
import { render } from 'react-dom';
import Table from './Table';
import Search from './Search';
import users from './users.js';
import './style.css';

/**
  Requirements
  =================
  1. Modify the Users component to accept a list of users as a prop and output a table of users. (Users are in users.js)

  2. Modify the Search component to render an input that filters the users table by the search term. The users should be filtered for matches on name or email.

  3. Display the number of search results.

  4. Add a column to the table which contains a button in every row. The button text should contain the user's first name.
  
  5. Add a click handler to the button such that when the user clicks the button, an alert is shown that contains the user's email address.

  6. Modify the button so that it is disabled if the user is not "active".

  7. Add some styling to the table and search input.

  Additional:
  =================
  * How would you add a zebra styling to the table?
  * What would you test?
  * How would you refactor this if you had more time?
**/

class Users extends Component {

  constructor() {
    this.state = { users };
    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  handleOnSearch(searchText) {
    if (searchText !== "") {
      const tempUsers = this.state.users;
      const filteredUsers = tempUsers.filter((u) =>
        // console.log(u.name);
        // console.log(searchText);
        (
          u.name.indexOf(searchText) > -1 ||
          u.email.indexOf(searchText) > -1
        )
        // u.name.indexOf(searchText) > -1
        // console.log(u.name.indexOf(searchText));
      );
      // console.log(filteredUsers);
      this.setState({ users: filteredUsers });
    } else if (searchText === "") {
      this.setState({ users });
    }
  }

  render() {
    return (
      <div>
        <Search onSearch={this.handleOnSearch} />
        <Table users={this.state.users} />
      </div>
    );
  }
}

render(<Users />, document.getElementById('root'));
