import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchGroup from './SearchGroup';
import { getBooks } from './actions';

class SearchContainer extends Component {
  render() {
    const { getBooksByAuthor, getBooksByTitle } = this.props;

    return (
      <SearchGroup
        onAuthorSearch={getBooksByAuthor}
        onTitleSearch={getBooksByTitle}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksByAuthor: e => {
      if (e.keyCode === 13) {
        dispatch(getBooks(e.target.value, 'author'));
      }
    },
    getBooksByTitle: e => {
      if (e.keyCode === 13) {
        dispatch(getBooks(e.target.value, 'title'));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchContainer);
