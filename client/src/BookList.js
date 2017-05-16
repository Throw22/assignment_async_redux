import React from 'react';
import Book from './Book';

const BookList = ({ results, isFetching, selectBook }) => {
  const bookCards = results.map(function(book) {
    return (
      <Book
        title={book.best_book[0].title[0]}
        author={book.best_book[0].author[0].name[0]}
        // imageUrl={book.best_book[0].image_url[0]}
        smallImageUrl={book.best_book[0].small_image_url[0]}
        avgRating={book.average_rating[0]}
        id={book.id[0]._}
        selectBook={selectBook}
      />
    );
  });

  return (
    <div className="BookList card-deck">
      {bookCards}
    </div>
  );
};

export default BookList;
