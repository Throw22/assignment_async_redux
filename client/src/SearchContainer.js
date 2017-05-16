import React, {Component} from "react";
import {connect} from "react-redux";
import SearchGroup from "./SearchGroup";

class SearchContainer extends Component {
  render() {
    return (
      <SearchGroup
        onAuthorKeyUp={this.props.getBooksByAuthor}
        onTitleKeyUp={this.props.getBooksByTitle}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksByAuthor: () => {
      dispatch(getBooksByAuthor());
    },
    getBooksByTitle: () => {
      dispatch(getBooksByTitle());
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchContainer);
