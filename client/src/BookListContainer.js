import React, {Component} from "react";
import {connect} from "react-redux";
import BookList from "./BookList";

class BookListContainer extends Component {
  render() {
    const {results, isFetching} = this.props;

    return <BookList results={results} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps)(BookListContainer);
