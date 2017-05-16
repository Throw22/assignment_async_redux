import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { selectBook } from './actions';

class BookListContainer extends Component {
  render() {
    const { results, isFetching, selectBook } = this.props;
    return (
      <div>
        <BookList
          results={results}
          isFetching={isFetching}
          selectBook={selectBook}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBook: e => {
      dispatch(selectBook(e.target.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
