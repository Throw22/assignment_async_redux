import React from "react";

const Book = ({props}) => {
  const {
    title,
    author,
    // imageUrl,
    smallImageUrl,
    avgRating
  } = props;

  return (
    <div className="Book card">
      <img src={smallImageUrl} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{avgRating}</p>
    </div>
  );
};

export default Book;
