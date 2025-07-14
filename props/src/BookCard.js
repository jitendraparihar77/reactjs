import "./App.css";
import React from "react";

const BookCard = (props) => {
  // console.log(props);
  const { cover, title, author, year } = props;
  return (
    <div className="book">
      <div className="book-image">
        <img src={cover} width={100} height={100} alt="book-img"/>
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <p className="book-author">by : {author} </p>
        <p className="book-year">{year}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default BookCard;
