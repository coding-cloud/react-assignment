import React, { Component } from 'react';

class Search extends Component {

  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    // console.log(e.target.value);
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div style={{ marginBottom: '10px' }} >
        <input type="text" placeholder="Type to search" onKeyUp={this.handleOnChange}
        style={{ padding: '5px', border: '1', fontSize: '12px' }}  />
      </div>
    );
  }
}

export default Search;