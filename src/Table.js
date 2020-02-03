import React, { Component } from 'react';

const styles = {
  td: {
    fontSize: '12px',
    borderTop: 'solid 1px #dadada'
  },
  button: {
    minWidth: '125px' 
  }
}

class Table extends Component {

  constructor() {
    super();
  }

  handleClick(email) {
    // console.log(email);
    if (email !== "") {
      alert(email);
    }
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <table width="100%" border="0" cellpadding="5" cellspacing="0">
        {users && users.map((u, i) =>
          <tr>
            <td style={styles.td}>{u.name}</td>
            <td style={styles.td}>{u.email}</td>
            <td style={styles.td} align="right">
              <button style={styles.button} onClick={this.handleClick.bind(this, u.email)} {...u.active === 'false' ? { disabled: true } : null}>{u.name.split(' ')[0]}</button>
            </td>
          </tr>
        )}
        </table>
        <div style={{ marginTop: '10px' }}>Total records found: {users.length}</div>
      </div>
    );
  }
}

export default Table;