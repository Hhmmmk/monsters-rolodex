import React, { Component } from 'react';


class SearchBox extends Component {
  render() {
    const {onChangeHandler} = this.props;
    return(
      <div>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox;