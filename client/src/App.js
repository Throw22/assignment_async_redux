import React from "react";
import BookContainer from "./BookListContainer";
import SearchContainer from "./SearchContainer";
import DescriptionContainer from "./DescriptionContainer";

const App = () => {
  return (
    <div className="App">
      <SearchContainer />
      <BookContainer />
      <DescriptionContainer />
    </div>
  );
};

export default App;
