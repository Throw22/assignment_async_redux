import React from 'react';

const SearchGroup = ({ onAuthorSearch, onTitleSearch }) => {
  return (
    <div>
      <h3>Search Books</h3>

      <label htmlFor="author">Author</label>
      <br />
      <input
        type="text"
        name="author"
        placeholder="Search author here"
        onKeyPress={onAuthorSearch}
      />

      <br />
      <br />

      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        placeholder="Search title here"
        onKeyPress={onTitleSearch}
      />
    </div>
  );
};

export default SearchGroup;
