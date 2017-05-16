import React from 'react';

const SearchGroup = (onAuthorSearch, onTitleSearch) => {
  // const {
  //   onAuthorSearch,
  //   onTitleSearch
  // } = props;

  return (
    <div>
      <h2>Search</h2>

      <label htmlFor="author">Author</label>
      <input type="text" name="author" onKeyPress={onAuthorSearch} />

      <label htmlFor="title">Title</label>
      <input type="text" name="title" onKeyPress={onTitleSearch} />
    </div>
  );
};

export default SearchGroup;
