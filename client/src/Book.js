import React from 'react';

const Book = props => {
  const {
    id,
    title,
    author,
    // imageUrl,
    smallImageUrl,
    avgRating,
    selectBook
  } = props;

  return (
    <div className="Book card">
      <img src={smallImageUrl} alt={title} />
      <h3><a href="#" onClick={selectBook} id={id}>{title}</a></h3>
      <h4>{author}</h4>
      <p>{avgRating}</p>
    </div>
  );
};

export default Book;
