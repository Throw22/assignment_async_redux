import React from 'react';
import BookContainer from './BookListContainer';
import SearchContainer from './SearchContainer';

const App = () => {
  return (
    <div className="App">
      <SearchContainer />
      <BookContainer />
    </div>
  );
};

export default App;
